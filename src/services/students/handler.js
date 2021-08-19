import students from "../../tools/fs-CRUD.js";
import path from "path";

const pathToFile = path.join(process.cwd(), "src/data/students.json");

const listStudents = async (req, res) => {
    try
    {
        const studentsList = await students.read(pathToFile);
        console.log(studentsList);
        if (req.query && req.query.name)
        {
            const filteredStudents = studentsList.filter(student =>
                student.name
                    .toLowerCase()
                    .includes(req.query.name.toLowerCase())
            );

            res.status(200).send(filteredStudents);

        }
        else
        {
            res.send(studentsList);
        }
    } catch (error)
    {

    }
};

const studentsHandler = {
    list: listStudents,
};

export default studentsHandler;