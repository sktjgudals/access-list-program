import { Mona, Tuea, Weda, Thua, Fria } from '../models';

const { Op } = require('sequelize');

const moment = require('moment');
const classNames = ["급식", "국어", "영어기초", "영어중급", "중국어기초", "중국어중급", "일본어기초", "일본어중급", "한자", "역사", "서예", "문인학", "수채화", "발도로프", "웰빙요가", "한국무용기초", "한국무용중급", "사물놀이", "풍물놀이", "문서활용법", "유튜브활용법", "컴퓨터기초", "센터SNS활용법", "스마트폰기초", "스마트폰중급", "라지볼A", "라지볼B", "시니어로빅", "노래교실", "댄스스포츠기초", "댄스스포츠중급", "사교댄스기초", "사교댄스중급", "라인댄스", "민요"]
const classValues = ["급식", "korean", "english1", "english2", "chinese1", "chinese2", "japanese1", "japanese2", "chinieseChar", "history", "calligraphy", "drawing", "watercolor", "waldorf", "yoga", "koreaDance1", "koreaDance2", "thingPlay", "windPlay", "doc", "youtube", "computer", "sns", "phone1", "phone2", "largeballA", "largeballB", "senior", "sing", "sportDance1", "sportDance2", "fourDance1", "fourDance2", "lineDance", "koreanSing"]

function translation(value) {
  const index = classValues.indexOf(value)
  return classNames[index]
}

async function dayAndSubject(day, subject) {
  let arr = [];
  if (day === 'mon') {
    await Mona.findAll({ where: { subject: { [Op.like]: "%" + subject + "%" } } }).then(p => {
      for (let i = 0; i < p.length; i++) {
        arr.push({ id: p[i].id, name: p[i].name, cardId: p[i].cardId, subject: p[i].subject });
      }
    })
    if (arr.length === 0) {
      return null;
    } for (let i = 0; i < arr.length; i++) {
      let kor = []
      const newArr = arr[i].subject.split(",")
      for (let t = 0; t < newArr.length; t++) {
        const b = translation(newArr[t]);
        kor.push(b)
      }
      arr[i].subject = kor.toString()
    }
    return arr;
  }
  if (day === 'tue') {
    await Tuea.findAll({ where: { subject: { [Op.like]: "%" + subject + "%" } } }).then(p => {
      for (let i = 0; i < p.length; i++) {
        arr.push({ id: p[i].id, name: p[i].name, cardId: p[i].cardId, subject: p[i].subject });
      }
    });
    if (arr.length === 0) {
      return null;
    } for (let i = 0; i < arr.length; i++) {
      let kor = []
      const newArr = arr[i].subject.split(",")
      for (let t = 0; t < newArr.length; t++) {
        const b = translation(newArr[t]);
        kor.push(b)
      }
      arr[i].subject = kor.toString()
    }
    return arr;
  }
  if (day === 'wed') {
    await Weda.findAll({ where: { subject: { [Op.like]: "%" + subject + "%" } } }).then(p => {
      for (let i = 0; i < p.length; i++) {
        arr.push({ id: p[i].id, name: p[i].name, cardId: p[i].cardId, subject: p[i].subject });
      }
    });
    if (arr.length === 0) {
      return null;
    } for (let i = 0; i < arr.length; i++) {
      let kor = []
      const newArr = arr[i].subject.split(",")
      for (let t = 0; t < newArr.length; t++) {
        const b = translation(newArr[t]);
        kor.push(b)
      }
      arr[i].subject = kor.toString()
    }
    return arr;
  }
  if (day === "thu") {
    await Thua.findAll({ where: { subject: { [Op.like]: "%" + subject + "%" } } }).then(p => {
      for (let i = 0; i < p.length; i++) {
        arr.push({ id: p[i].id, name: p[i].name, cardId: p[i].cardId, subject: p[i].subject });
      }
    });
    if (arr.length === 0) {
      return null;
    } for (let i = 0; i < arr.length; i++) {
      let kor = []
      const newArr = arr[i].subject.split(",")
      for (let t = 0; t < newArr.length; t++) {
        const b = translation(newArr[t]);
        kor.push(b)
      }
      arr[i].subject = kor.toString()
    }
    return arr;
  }
  if (day === 'fri') {
    await Fria.findAll({ where: { subject: { [Op.like]: "%" + subject + "%" } } }).then(p => {
      for (let i = 0; i < p.length; i++) {
        arr.push({ id: p[i].id, name: p[i].name, cardId: p[i].cardId, subject: p[i].subject });
      }
    });
    if (arr.length === 0) {
      return null;
    } for (let i = 0; i < arr.length; i++) {
      let kor = []
      const newArr = arr[i].subject.split(",")
      for (let t = 0; t < newArr.length; t++) {
        const b = translation(newArr[t]);
        kor.push(b)
      }
      arr[i].subject = kor.toString()
    }
    return arr;
  }
  return null;
}

export default dayAndSubject
