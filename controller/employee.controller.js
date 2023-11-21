const jsonFileUtils=require('../utils/jsonFileUtils');

exports.employeeSave=(req,res)=>{
    try {
        const {name,age,stillEmployee}=req.body;

        let employees=jsonFileUtils.readJsonFile()

        const newEmployee={id:generateUniqueId(),name,age,stillEmployee}
        employees.push(newEmployee)

        jsonFileUtils.writeJsonFile(employees)
        res.status(201).send()

    } catch (error) {
        console.log(error)
        res.status(406).send()
    }
}

exports.employeeGet=(req,res)=>{
    try {
        const employees=jsonFileUtils.readJsonFile()

        const employee=employees.find(e=>e.id===req.params.id)

        if (employee) {
            res.status(200).send(employee)
        }else{
            res.status(404).send()
        }


    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
}

exports.employeeUpdate=(req,res)=>{
    try {
        const { name, age, stillEmployee } = req.body;
        const id = req.params.id;

        let employees=jsonFileUtils.readJsonFile()

        const index=employees.findIndex(e=>e.id===id)

        if (index!==-1) {
            employees[index]={...employees[index],name,age,stillEmployee}
            jsonFileUtils.writeJsonFile(employees)

            res.status(203).send()
        }else{
            res.status(404).send()
        }


    } catch (error) {
        console.log(error)
        res.status(500).send()

    }
}

exports.employeeDelete=(req,res)=>{
    try {
        const id = req.params.id;
        let employees=jsonFileUtils.readJsonFile()
        const updatedEmployees = employees.filter(e => e.id !== id);

        jsonFileUtils.writeJsonFile(updatedEmployees)
        res.status(204).send()

    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
}

const generateUniqueId = () => {
    return Date.now().toString();
  };



