const router = require("express").Router();
const upload = require("../Middleware/Upload");
const User = require("../model/UserSchema");    

router.post("/upload", upload.array('images', 5),async(req,res) => {
    try {
        const imagePaths = req.files.map(file => file.path);
        const user = new User({
            name : req.body.name,
           socialHandle : req.body.socialHandle,
            images : imagePaths
        });

        await user.save();
        res.status(200).json({message : "Uploaded Successfully !",user});
    } catch (error) {
        res.status(500).json({message : error.message || "Internal Server Error"});
    }
})



router.get("/details", async(req,res) => {
    try {
        const user = await User.find();
        res.status(200).json({message : "User fethch successfully !",user});
    } catch (error) {
        res.status(500).json({message : error.message || "Internal Server Error"});
    }
})

router.get("/details/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ message: error.message || "Internal Server Error" });
    }
  });


// DELETE route to delete a user by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;

  
module.exports = router;