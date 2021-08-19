import students from "../../tools/fs-CRUD.js";
import createError from "http-errors";
import path from "path";

const pathToFile = path.join(process.cwd(), "src/data/students.json");

export const listStudents = async (req, res, next) => {
    try
    {
        const studentsList = await students.read(pathToFile);
        if (req.query && req.query.name)
        {
            const filteredStudents = studentsList.filter(student =>
                student.name
                    .toLowerCase()
                    .includes(req.query.name.toLowerCase())
            );
            res.send(filteredStudents);
        }
        else
            res.send(studentsList);
    }
    catch (error)
    {
        next(createError(404, error.message));
    }
};

export const singleStudent = async (req, res, next) => {
    console.log("req.params.id::: ", req.params.id);
    try
    {
        const studentsList = await students.single(req.params.id, pathToFile);
        res.send(studentsList);
    }
    catch (error)
    {
        next(createError(500, error.message));
    }
};

export const addStudent = async (req, res, next) => {
    console.log("req.params.id::: ", req.body);
    try
    {
        const newStudent = await students.new(req.body, pathToFile);
        res.status(204).send(newStudent);
    }
    catch (error)
    {
        next(createError(500, error.message));
    }
};

const studentsHandler = {
    add: addStudent,
    list: listStudents,
    single: singleStudent,
    // update: updateStudent,
    // delete: deleteStudent
};

export default studentsHandler;