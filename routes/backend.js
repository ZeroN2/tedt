const express = require('express');
const path = require('path')
const redeem = require('../utils/redeem');
const rootDir = require("../utils/path")
const router = express.Router();

router.get('/',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','donate.html'))
    
});

router.post('/api/payment',(req,res,next) => {
    redeem('เบอร์โทรศัพ',req.body.tw).then(redeemed => {
        return res.json({
            success: true,
            จํานวน: redeemed.amount
        })
    }).catch(() => {
        return res.json({
            msg: "ลิ้งอั่งเปาไม่ถูกต้องหรือรับอั่งเปาไม่สําเร็จ"
        })
    })
})
module.exports = router;