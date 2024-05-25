// src/controllers/medic.controller.js
import { Medic } from "../models/Medic.js";
import { Office } from "../models/Office.js"; // Crear solo si existe la tabla Office

export async function getMedics(req, res) {
  try {
    const medics = await Medic.findAll({
      attributes: ["id", "name", "speciality", "phone", "image"],
    });
    res.json(medics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createMedic(req, res) {
  const { name, speciality, phone, email, image, services, certifications, state } = req.body;
  try {
    let newMedic = await Medic.create({
      name, speciality, phone, email, image, services, certifications, state
    });
    console.log(newMedic); // Agrega esta línea para verificar los datos
    return res.json(newMedic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getMedic(req, res) {
  const { id } = req.params;
  try {
    const medic = await Medic.findOne({ where: { id } });
    res.json(medic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateMedic(req, res) {
  const { id } = req.params;
  const { name, speciality, phone, email, image, services, certifications, state } = req.body;
  try {
    const medic = await Medic.findByPk(id);
    if (medic) {
      medic.name = name;
      medic.speciality = speciality;
      medic.phone = phone;
      medic.email = email;
      medic.image = image;
      medic.services = services;
      medic.certifications = certifications;
      medic.state = state;
      await medic.save();
      res.json(medic);
    } else {
      res.status(404).json({ message: "Medic not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteMedic(req, res) {
  const { id } = req.params;
  try {
    await Medic.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getMedicOffices(req, res) {
  const { id } = req.params;
  try {
    const offices = await Office.findAll({ where: { medicId: id } });
    res.json(offices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
