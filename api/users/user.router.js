const {
  createUser,
  getUsersByUserDocument,
  getUsers,
  deleteUser,
  updateUser,
  login
} = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/register", createUser);
router.get("/", checkToken, getUsers);
router.get("/:document", checkToken, getUsersByUserDocument);
router.patch("/", checkToken, updateUser);
router.delete("/", checkToken, deleteUser);
router.post("/login", login);
module.exports = router;
