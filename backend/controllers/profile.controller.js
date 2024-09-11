import Profile from "../models/Profile.schema.js";

export const getAllProfiles = async (req, res) => {
  const profiles = await Profile.find({}).sort({ name: 1, surname: 1 });
  res.send(profiles);
};

export const getProfile = async (req, res) => {
  const id = req.params.id;

  try {
    const findProfile = await Profile.findById(id);
    res.send(findProfile);
  } catch (error) {
    res.stautus(500).send({ error: "Something went wrong" });
  }
};

export const createProfile = async (req, res) => {
  const profileData = req.body;
  const newProfile = new Profile(profileData);

  try {
    const savedProfile = await newProfile.save();
    console.log(savedProfile);
    return res.status(201).send(savedProfile);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong" });
  }
};

export const putProfile = async (req, res) => {
  const id = req.params.id;
  const profileData = req.body;

  try {
    const updateProfile = await Profile.findByIdAndUpdate(id, profileData, {
      new: true,
    });

    if (!updateProfile) {
      return res.status(404).send({ error: "Profile not found" });
    }
    res.send(updateProfile)
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: "Something went wrong" });
  }
};

export const editAvatar = async (req, res) => {
  const id = req.params.id;
  const profileData = { avatar: req.file.path };

  try{
    const updateProfile = await Profile.findByIdAndUpdate(id,profileData,{
      new: true
    })
    if (!updateProfile){
      return res.status(404).send ({ error: "Profile not found"})
    }
    res.send (updateProfile)
  } catch (err){
    {
      console.log(err);
      res.status(400).send ({ error: "Something went wrong"})
    }
  }
};
