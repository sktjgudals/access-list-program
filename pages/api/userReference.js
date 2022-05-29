// 파란색검색창
const { Post } = require('/models/index');
const { Op } = require('sequelize');
const moment = require('moment');

const classNames = ["급식", "국어", "영어기초", "영어중급", "중국어기초", "중국어중급", "일본어기초", "일본어중급", "한자", "역사", "서예", "문인학", "수채화", "발도로프", "웰빙요가", "한국무용기초", "한국무용중급", "사물놀이", "풍물놀이", "문서활용법", "유튜브활용법", "컴퓨터기초", "센터SNS활용법", "스마트폰기초", "스마트폰중급", "라지볼A", "라지볼B", "시니어로빅", "노래교실", "댄스스포츠기초", "댄스스포츠중급", "사교댄스기초", "사교댄스중급", "라인댄스", "민요"]
const classValues = ["급식", "korean", "english1", "english2", "chinese1", "chinese2", "japanese1", "japanese2", "chinieseChar", "history", "calligraphy", "drawing", "watercolor", "waldorf", "yoga", "koreaDance1", "koreaDance2", "thingPlay", "windPlay", "doc", "youtube", "computer", "sns", "phone1", "phone2", "largeballA", "largeballB", "senior", "sing", "sportDance1", "sportDance2", "fourDance1", "fourDance2", "lineDance", "koreanSing"]

function translation(value) {
  const index = classValues.indexOf(value)
  return classNames[index]
}

export default async function userReference(req, res) {
  const name = req.body.state.name;
  const date = req.body.state.date;
  const cl = req.body.state.class;
  let brr = [];
  const dateFormat = moment(date).format('YYYY-MM-DD');
  //날짜과목
  if (cl && date && !name) {
    const clDate = await Post.findAll({ where: { subject: { [Op.like]: "%" + cl + "%" }, date: { [Op.and]: { [Op.like]: "%" + dateFormat + "%" } } }, order: [['createdAt', 'desc']] });
    for (let i = 0; i < clDate.length; i++) {
      let times = clDate[i].createdAt;
      const datefs = moment(times).format('YYYY/MM/DD-HH:mm:ss');
      brr.push({ name: clDate[i].name, cardId: clDate[i].cardId, subject: cl, temp: clDate[i].temp, time: datefs })
    } for (let i = 0; i < brr.length; i++) {
      let kor = []
      const newArr = brr[i].subject.split(",")
      for (let t = 0; t < newArr.length; t++) {
        const b = translation(newArr[t]);
        kor.push(b)
      }
      brr[i].subject = kor.toString()
    }
    return res.json(brr);
  }
  // 네임 과목
  if (name && cl && !date) {
    const clName = await Post.findAll({ where: { name: name, subject: { [Op.and]: { [Op.like]: "%" + cl + "%" } } }, order: [['createdAt', 'desc']] });
    for (let i = 0; i < clName.length; i++) {
      let times = clName[i].createdAt;
      const datefs = moment(times).format('YYYY/MM/DD-HH:mm:ss');
      brr.push({ name: clName[i].name, cardId: clName[i].cardId, subject: cl, temp: clName[i].temp, time: datefs })
    }
    for (let i = 0; i < brr.length; i++) {
      let kor = []
      const newArr = brr[i].subject.split(",")
      for (let t = 0; t < newArr.length; t++) {
        const b = translation(newArr[t]);
        kor.push(b)
      }
      brr[i].subject = kor.toString()
    }
    return res.json(brr);
  }
  //네임 날짜
  if (name && date && !cl) {
    const dateName = await Post.findAll({ where: { name: name, date: { [Op.and]: { [Op.like]: "%" + dateFormat+ "%" } } }, order: [['createdAt', 'desc']] });
    for (let i = 0; i < dateName.length; i++) {
      let times = dateName[i].createdAt;
      const datefs = moment(times).format('YYYY/MM/DD-HH:mm:ss');
      brr.push({ name: dateName[i].name, cardId: dateName[i].cardId, subject: dateName[i].subject, temp: dateName[i].temp, time: datefs });
    }
    for (let i = 0; i < brr.length; i++) {
      let kor = []
      const newArr = brr[i].subject.split(",")
      for (let t = 0; t < newArr.length; t++) {
        const b = translation(newArr[t]);
        kor.push(b)
      }
      brr[i].subject = kor.toString()
    }
    return res.json(brr);
  }
  //날짜로 선택하면
  if (date && !name && !cl) {
    const findDate = await Post.findAll({ where: { date: { [Op.like]: "%" + dateFormat + "%" } }, order: [['createdAt', 'desc']] });
    for (let i = 0; i < findDate.length; i++) {
      let times = findDate[i].createdAt;
      const datefs = moment(times).format('YYYY/MM/DD-HH:mm:ss');
      brr.push({ name: findDate[i].name, cardId: findDate[i].cardId, subject: findDate[i].subject, temp: findDate[i].temp, time: datefs });
    }
    for (let i = 0; i < brr.length; i++) {
      let kor = []
      const newArr = brr[i].subject.split(",")
      for (let t = 0; t < newArr.length; t++) {
        const b = translation(newArr[t]);
        kor.push(b)
      }
      brr[i].subject = kor.toString()
    }
    return res.json(brr);
  }
  //이름만
  if (name && !cl && !date) {
    const find = await Post.findAll({ where: { name: name }, order: [['createdAt', 'desc']] });
    for (let i = 0; i < find.length; i++) {
      let times = find[i].createdAt;
      const datefs = moment(times).format('YYYY/MM/DD-HH:mm:ss');
      brr.push({ name: find[i].name, cardId: find[i].cardId, temp: find[i].temp, subject: find[i].subject, time: datefs });
    }
    for (let i = 0; i < brr.length; i++) {
      let kor = []
      const newArr = brr[i].subject.split(",")
      for (let t = 0; t < newArr.length; t++) {
        const b = translation(newArr[t]);
        kor.push(b)
      }
      brr[i].subject = kor.toString()
    }
    return res.json(brr);
  }

  //과목만
  if (cl && !name && !date) {
    const find = await Post.findAll({ where: { subject: { [Op.like]: "%" + cl + "%" } }, order: [['createdAt', 'desc']] });
    for (let i = 0; i < find.length; i++) {
      let times = find[i].createdAt;
      const datefs = moment(times).format('YYYY/MM/DD-HH:mm:ss');
      brr.push({ name: find[i].name, cardId: find[i].cardId, subject: cl, temp: find[i].temp, time: datefs });
    }
    for (let i = 0; i < brr.length; i++) {
      let kor = []
      const newArr = brr[i].subject.split(",")
      for (let t = 0; t < newArr.length; t++) {
        const b = translation(newArr[t]);
        kor.push(b)
      }
      brr[i].subject = kor.toString()
    }
    return res.json(brr);
  }
  //아무것도 안들어오면
  return res.json(null);
}

