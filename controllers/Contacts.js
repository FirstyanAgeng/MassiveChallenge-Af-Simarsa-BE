import Contacts from "../models/ContactsModel.js";

export const getContacts = async(req, res) =>{
    try {
        const response = await Contacts.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createContacts = async(req, res) =>{
    try {
        await Contacts.create(req.body);
        res.status(201).json({msg: "Contact Created"});
    } catch (error) {
        console.log(error.message);
    }
}