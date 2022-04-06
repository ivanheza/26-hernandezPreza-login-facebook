import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
   console.log(process.version)
   let user = {
      name: "Admin",
      profilePhoto: "https://cdn1.iconfinder.com/data/icons/web-55/32/web_3-512.png",
   }
   let p = {
      argumentos: process.argv,
      OS: process.platform,
      nodeVer: process.version,
      memoria: process.memoryUsage(),
      path: process.execPath,
      pID: process.pid,
      folder: process.cwd(),
   }
   //console.log(p)
   res.render("process-info", {p, user})
})

export default router
