import DataDokter from "../models/DatadokterModel.js";

export const getDokter = async (req, res) =>{
    try {
        const response = await DataDokter.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message)
    }
}

export const getDokterById = async (req, res) => {
    try {
        const response = await DataDokter.findOne({
            where:{
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message)
    }
}

export const saveDokter = async (req,res) =>{
    try {
        await DataDokter.create(req.body);
        res.status(201).json(req.body);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateDokter = async(req,res) =>{
    try {
        await DataDokter.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Dokter Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteDokter = async(req,res) =>{
    try {
        await DataDokter.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Dokter Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}