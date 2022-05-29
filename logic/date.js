import { User, Post, Mona, Tuea, Weda, Thua, Fria } from '../models';
const db = require('../models/db');

const moment = require('moment');
const classNames = ["급식", "국어", "영어기초", "영어중급", "중국어기초", "중국어중급", "일본어기초", "일본어중급", "한자", "역사", "서예", "문인학", "수채화", "발도로프", "웰빙요가", "한국무용기초", "한국무용중급", "사물놀이", "풍물놀이", "문서활용법", "유튜브활용법", "컴퓨터기초", "센터SNS활용법", "스마트폰기초", "스마트폰중급", "라지볼A", "라지볼B", "시니어로빅", "노래교실", "댄스스포츠기초", "댄스스포츠중급", "사교댄스기초", "사교댄스중급", "라인댄스", "민요"]
const classValues = ["급식", "korean", "english1", "english2", "chinese1", "chinese2", "japanese1", "japanese2", "chinieseChar", "history", "calligraphy", "drawing", "watercolor", "waldorf", "yoga", "koreaDance1", "koreaDance2", "thingPlay", "windPlay", "doc", "youtube", "computer", "sns", "phone1", "phone2", "largeballA", "largeballB", "senior", "sing", "sportDance1", "sportDance2", "fourDance1", "fourDance2", "lineDance", "koreanSing"]

function translation(value) {
  const index = classValues.indexOf(value)
  return classNames[index]
}

async function dateFuntion(days) {
  if (days) {
    let userArr = [];
    let arr = [];
    try {
      if (days === 'mon') {
        db.query(`select UserId, group_concat(subject) from mons group by UserId `, async (err, user) => {
          for (let i = 0; i < user.length; i++) {
            userArr.push({ id: user[i].UserId, subject: user[i]["group_concat(subject)"] });
            const ds = await User.findAll({ where: { id: user[i].UserId } });
            await Mona.findOrCreate({ where: { UserId: user[i].UserId }, defaults: { name: ds[0].name, cardId: ds[0].cardId, subject: user[i]["group_concat(subject)"], UserId: user[i].UserId } });
          }
        });
        const monData = await Mona.findAll();
        for (let i = 0; i < monData.length; i++) {
          arr.push({
            id: monData[i].id, name: monData[i].name, cardId: monData[i].cardId,
            subject: monData[i].subject
          });
        } for (let i = 0; i < arr.length; i++) {
          let kor = []
          const newArr = arr[i].subject.split(",")
          for (let t = 0; t < newArr.length; t++) {
            const b = translation(newArr[t]);
            kor.push(b)
          }
          arr[i].subject = kor.toString()
        }

      }
      if (days === 'tue') {
        db.query(`select UserId, group_concat(subject) from tues group by UserId `, async (err, user) => {
          for (let i = 0; i < user.length; i++) {
            userArr.push({ id: user[i].UserId, subject: user[i]["group_concat(subject)"] });
            const ds = await User.findAll({ where: { id: user[i].UserId } });
            await Tuea.findOrCreate({ where: { UserId: user[i].UserId }, defaults: { name: ds[0].name, cardId: ds[0].cardId, subject: user[i]["group_concat(subject)"], UserId: user[i].UserId } });
          }
        });
        const tueData = await Tuea.findAll();
        for (let i = 0; i < tueData.length; i++) {
          arr.push({
            id: tueData[i].id, name: tueData[i].name, cardId: tueData[i].cardId,
            subject: tueData[i].subject
          });
        } for (let i = 0; i < arr.length; i++) {
          let kor = []
          const newArr = arr[i].subject.split(",")
          for (let t = 0; t < newArr.length; t++) {
            const b = translation(newArr[t]);
            kor.push(b)
          }
          arr[i].subject = kor.toString()
        }
      }
      if (days === 'wed') {
        db.query(`select UserId, group_concat(subject) from weds group by UserId `, async (err, user) => {
          for (let i = 0; i < user.length; i++) {
            userArr.push({ id: user[i].UserId, subject: user[i]["group_concat(subject)"] });
            const ds = await User.findAll({ where: { id: user[i].UserId } });
            await Weda.findOrCreate({ where: { UserId: user[i].UserId }, defaults: { name: ds[0].name, cardId: ds[0].cardId, subject: user[i]["group_concat(subject)"], UserId: user[i].UserId } });
          }
        });
        const wedData = await Weda.findAll();
        for (let i = 0; i < wedData.length; i++) {
          arr.push({
            id: wedData[i].id, name: wedData[i].name, cardId: wedData[i].cardId,
            subject: wedData[i].subject
          });
        } for (let i = 0; i < arr.length; i++) {
          let kor = []
          const newArr = arr[i].subject.split(",")
          for (let t = 0; t < newArr.length; t++) {
            const b = translation(newArr[t]);
            kor.push(b)
          }
          arr[i].subject = kor.toString()
        }
      }
      if (days === 'thu') {
        db.query(`select UserId, group_concat(subject) from thus group by UserId `, async (err, user) => {
          for (let i = 0; i < user.length; i++) {
            userArr.push({ id: user[i].UserId, subject: user[i]["group_concat(subject)"] });
            const ds = await User.findAll({ where: { id: user[i].UserId } });
            await Thua.findOrCreate({ where: { UserId: user[i].UserId }, defaults: { name: ds[0].name, cardId: ds[0].cardId, subject: user[i]["group_concat(subject)"], UserId: user[i].UserId } });
          }
        });
        const thuData = await Thua.findAll();
        for (let i = 0; i < thuData.length; i++) {
          arr.push({
            id: thuData[i].id, name: thuData[i].name, cardId: thuData[i].cardId,
            subject: thuData[i].subject,
          });
        } for (let i = 0; i < arr.length; i++) {
          let kor = []
          const newArr = arr[i].subject.split(",")
          for (let t = 0; t < newArr.length; t++) {
            const b = translation(newArr[t]);
            kor.push(b)
          }
          arr[i].subject = kor.toString()
        }

      } if (days === 'fri') {
        db.query(`select UserId, group_concat(subject) from fris group by UserId `, async (err, user) => {
          for (let i = 0; i < user.length; i++) {
            userArr.push({ id: user[i].UserId, subject: user[i]["group_concat(subject)"] });
            const ds = await User.findAll({ where: { id: user[i].UserId } });
            await Fria.findOrCreate({ where: { UserId: user[i].UserId }, defaults: { name: ds[0].name, cardId: ds[0].cardId, subject: user[i]["group_concat(subject)"], UserId: user[i].UserId } });
          }
        });
        const friData = await Fria.findAll();
        for (let i = 0; i < friData.length; i++) {
          arr.push({
            id: friData[i].id, name: friData[i].name, cardId: friData[i].cardId,
            subject: friData[i].subject
          });
        } for (let i = 0; i < arr.length; i++) {
          let kor = []
          const newArr = arr[i].subject.split(",")
          for (let t = 0; t < newArr.length; t++) {
            const b = translation(newArr[t]);
            kor.push(b)
          }
          arr[i].subject = kor.toString()
        }
      }
      return arr;
    } catch (err) {
      throw err;
    }
  }
  return null;
}

export default dateFuntion
// 금요일 첫 데이터에 중복데이터 삭제
// db.query(`DELETE FROM fris WHERE id NOT IN (SELECT * FROM (SELECT MIN(id) FROM fris GROUP BY UserId) AS temp)`, (err, to) => {
// });