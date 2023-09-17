const { Pool } = require('pg');
const dotenv = require('dotenv').config();


//Configuramos el entorno de conexion al servidor postgress
const conexion = new Pool({
    user: process.env.DBP_USER,
    host: process.env.DB_SERVER,
    database: process.env.DBP_DATABASE,
    password: process.env.DBP_PASSWORD,
    port: process.env.DBP_PORT,
    allowExitOnIdle: true
    });

     //lee lo post de la base de datos
    const getPosts = async(req,res)=>{
          try {
                const result = await  conexion.query('Select * from posts order by id');
                const posts = result.rows;
                res.json(posts);   
            } catch (error) {
                console.log(error);
                res.status(500).json({ message: `Error al obtener los datos posts` });
            }

    }  
    //Insertamos un nuevo post en la BD
    const postPost = async(req,res)=>{
        const {titulo,url,descripcion} = req.body;
        const img = url;
        const likes = 0;
        try {
            const result = await conexion.query(
                'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING id',
                [titulo, img, descripcion, likes]
            );
            
            const postId = result.rows[0].id;
            res.json({ id: postId, titulo, img, descripcion, likes });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: `Error al obtener los posts ${process.env.DB_USER} ${process.env.DB_HOST} ${process.env.DB_NAME} ${process.env.DB_PORT}` });
        }
    }

    module.exports = {postPost,getPosts};