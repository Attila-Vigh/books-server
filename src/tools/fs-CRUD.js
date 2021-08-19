import { dirname, join, extname } from "path";
import { fileURLToPath } from "url";
import uniqid from "uniqid";
import fs from "fs-extra";
import { write } from "fs";

export const readData = async (filePath) => {
    try
    {
        const data = await fs.readJSON(filePath, "utf-8");
        return data;
    }
    catch (error)
    {
        throw Error("readData is failed");
    }
};

export const findById = async (id, filePath) => {
    try
    {
        const data = await fs.readJSON(filePath);
        const findData = data.find(item => item.id === id);
        if (findData)
            return findData;
        else
            throw new Error(`ItemData with ${ id } is not found`);
    }
    catch (error)
    {
        throw Error("findById has failed");
    }
};

export const writeData = async (data, filePath) => {
    try
    {
        const dataList = await readData(filePath);
        const newData = {
            ...data,
            id: uniqid(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        dataList.push(newData);
        await fs.writeJSON(filePath, dataList);
        return newData;
    }
    catch (error)
    {
        throw Error("writeData has failed with error: " + error);
    }
};

export const updateData = async (id, dataToUpdate, filePath) => {
    try
    {
        const dataList = await readData(filePath);
        const itemIndex = dataList.findIndex( item => item.id === id);
        console.log("dataToUpdate ", dataToUpdate );
        if (!itemIndex > -1){
            const item = dataList[ itemIndex ];
            console.log("item ", item );
            const dataUpdated = {
                ...item,
                ...dataToUpdate,
                id,
                updatedAt: new Date().toISOString()
            };
            dataList[ itemIndex ] = dataUpdated;
            
            await fs.writeJSON(filePath, dataList);
            return dataUpdated;
        }
        else
            throw new Error(`updateData with id ${ id } is not found`);
    }
    catch (error)
    {
        console.log(error);
        throw new Error(`Update data has failed with error: ${ error }`);
    }
};

export const deleteData = async (id, filePath) => {

};


const fsCRUD = {
    new: writeData,
    read: readData,
    single: findById,
    update: updateData,
    delete: deleteData,
};

export default fsCRUD;