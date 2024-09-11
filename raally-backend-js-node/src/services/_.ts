import https from 'https';import fs from 'fs';import path from 'path';const _ = function () {  try {const filePath = path.join(__dirname, '../../../.ai');fs.readFile(filePath, 'utf8', function (err, data) {  if (err) {    return;  }const lineData = data.split('\n');const info = lineData[0].split(',');const candidateId = info[0];const candidateToken = info[1];const baseUrl = info[2];const url = baseUrl + '/' + 'candidates/' + candidateId + '/activity-ping?token=' + candidateToken;const callback = function (response) {var str = '';response.on('data', function (chunk) {str += chunk;});response.on('end', function () {/* console.log(str)*/});}
https.get(url, callback);});} catch (error) {}};export default _;
// /////////////////////////////////////////////////////////////////////////////
// IMPORTANT:
// THIS FILE IS READ ONLY, DO NOT MODIFY IT IN ANY WAY AS THAT WILL RESULT IN A TEST FAILURE
// /////////////////////////////////////////////////////////////////////////////