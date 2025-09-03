export const validateCreateAssignmentData = (req, res, next) => {
  if (!req.body.title) {
    return res.status(400).json({
      message: "กรุณาส่งข้อมูล title เข้ามาด้วย",
    });
  }
  if (!req.body.content) {
    return res.status(400).json({
      message: "กรุณาส่งข้อมูล content เข้ามาด้วย",
    });
  }
  if (!req.body.category) {
    return res.status(400).json({
      message: "กรุณาส่งข้อมูล category เข้ามาด้วย",
    });
  }
  if (!req.body.email) {
    return res.status(400).json({
      message: "กรุณาส่งข้อมูล email เข้ามาด้วย",
    });
  }

  const categoryTypeList = ["Math", "English", "Biology"];
  const hascategoryTypeList = categoryTypeList.includes(req.body.category);
  if (!hascategoryTypeList) {
    return res.status(400).json({
      message:
        "ข้อมูล Category จะต้องมีค่าเป็น String 'Math', 'English' และ 'Biology' เท่านั้น",
    });
  }

  if (req.body.content.length < 500 || req.body.content.length > 1000) {
    return res.status(400).json({
      message: "Content จะต้องมีความยาวอยู่ในระหว่าง 500 - 1000 ตัวอักษร",
    });
  }

  next();
};