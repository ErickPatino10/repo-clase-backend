import mongoose from "mongoose";

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("Database is running");
}

const { Schema } = mongoose;

const productoSchema = new Schema({
  foto: { type: String, required: true },
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  cantidad: { type: Number, required: true }
});

const Producto = mongoose.model('Producto', productoSchema);

export {
  main,
  Producto
};




























