import prisma from "../lib/prisma.js";

export const getPosts = async (req, res) => {
    try {

        const posts = await prisma.post.findMany({});

        res.status(200).json(posts)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failded to get posts" })
    }

}

export const getPost = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await prisma.post.findUnique({
            where: { id },
            include: {
                postDetail: true,
                user: {
                    select: {
                        username: true,
                        avatar: true
                    }
                }
            }
        });

        res.status(200).json(post)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failded to get posts" })
    }

}

export const addPost = async (req, res) => {
    console.log("in add new post")
    const body = req.body;
    const tokenUserID = req.userId;
    const obj = {
        ...body.postData,
        userId: tokenUserID,
        postDetail: {
            create: body.postDetail
        }
    }
    console.log("create obkect", obj);
    try {
        const newPost = await prisma.post.create({
            data: {
                ...body.postData,
                userId: tokenUserID,
                postDetail: {
                    create: body.postDetail
                }
            }
        })

        res.status(200).json(newPost)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failded to get posts" })
    }

}

export const updatePost = async (req, res) => {
    console.log("in update post")
    try {

        res.status(200).json()
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failded to get posts" })
    }

}

export const deletePost = async (req, res) => {
    const id = req.params.id;
    const userId = req.userId;
    try {

        const post = await prisma.post.findUnique({
            where: { id }
        });

        if (post.userId !== userId) {
            return res.status(403).json({ message: 'Not Authorized!' })
        }

        await prisma.post.delete({
            where: { id }
        })

        res.status(200).json({ message: "post deleted" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failded to get posts" })
    }

}



