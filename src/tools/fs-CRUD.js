import { dirname, join, extname } from "path";
import { fileURLToPath } from "url";
import uniqid from "uniqid";
import fs from "fs-extra";
import { write } from "fs";



export const writeData = async ( data, filePath ) => {

}

export const readData = async ( filePath ) => {
    try {
        const data = await fs.readFile( filePath, "utf-8" );
        return data
    } catch (error) {
        throw new Error("Read contact is failed");
    }
}

export const findById = async ( id, filePath ) => {

}

export const updateData = async ( id, dataToUpdate, filePath ) => {

}

export const deleteData = async ( id, filePath ) => {

}


const fsCRUD = {
    new     : writeData,
    read    : readData,
    findById: findById,
    update  : updateData,
    delete  : deleteData,
}

export default fsCRUD;