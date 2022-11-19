import {Router} from 'express';
import {obtener_libro, todos_libros, crear_libro, actualizar_libro, borrar_libro} from "../controllers/books.controllers.js";

const router = Router();

router.get('/', (req,res)=>res.send('Home Page'));
router.get('/books', todos_libros);//get muestra todos los libros 
router.get('/books/:isbn', obtener_libro);//get muestra el libro solicitado
router.post('/books', crear_libro); //Crear un nuevo libro
router.put('/books/:id', actualizar_libro);//Actualizar desde un id un libro 
router.delete('/books/:id', borrar_libro);//borrar un libro desde un isbn


export default router;