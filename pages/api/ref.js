import dateSelect from '../../logic/date'
import subjectSelect from '../../logic/subject';
import nameSelect from '../../logic/name';
import dayAndSubject from '../../logic/dayAndSubject';
import nameAndDay from '../../logic/nameAndDay';
import nameAndSubject from '../../logic/nameAndSubject';

const { sequelize, User } = require('../../models/index');
const classNames = ["급식", "국어", "영어기초", "영어중급", "중국어기초", "중국어중급", "일본어기초", "일본어중급", "한자", "역사", "서예", "문인학", "수채화", "발도로프", "웰빙요가", "한국무용기초", "한국무용중급", "사물놀이", "풍물놀이", "문서활용법", "유튜브활용법", "컴퓨터기초", "센터SNS활용법", "스마트폰기초", "스마트폰중급", "라지볼A", "라지볼B", "시니어로빅", "노래교실", "댄스스포츠기초", "댄스스포츠중급", "사교댄스기초", "사교댄스중급", "라인댄스", "민요"]
const classValues = ["급식", "korean", "english1", "english2", "chinese1", "chinese2", "japanese1", "japanese2", "chinieseChar", "history", "calligraphy", "drawing", "watercolor", "waldorf", "yoga", "koreaDance1", "koreaDance2", "thingPlay", "windPlay", "doc", "youtube", "computer", "sns", "phone1", "phone2", "largeballA", "largeballB", "senior", "sing", "sportDance1", "sportDance2", "fourDance1", "fourDance2", "lineDance", "koreanSing"]

function translation(value) {
  const index = classValues.indexOf(value)
  return classNames[index]
}

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스연결성공');
  })
  .catch((err) => {
    console.error(err);
  });

const create = async (req, res) => {
  let brr = [];
  const name = req.body.state.name;
  const subject = req.body.state.class;
  const day = req.body.state.day;

  if (name && subject && day) {
    return console.log('아직 구현하기싫음');
  }
  if (name && subject && !day) {
    try {
      const NAS = await nameAndSubject(name, subject);
      return res.json(NAS);
    } catch (err) {
      throw err;
    }
  }
  if (name && day && !subject) {
    try {
      const NAD = await nameAndDay(name, day);
      return res.json(NAD);
    } catch (err) {
      throw err;
    }
  }
  if (day && subject && !name) {
    try {
      const DAS = await dayAndSubject(day, subject);
      return res.json(DAS);
    } catch (err) {
      throw err;
    }
  }

  if (day && !subject && !name) {
    try {
      const dateData = await dateSelect(day)
      return res.json(dateData);
    } catch (err) {
      throw err;
    }
  }
  //이름으로 찾기 
  if (name && !subject && !day) {
    try {
      const nameData = await nameSelect(name);
      return res.json(nameData);
    } catch (err) {
      throw err;
    }
  }
  //subject데이터로찾기
  if (subject && !name && !day) {
    try {
      const subjectData = await subjectSelect(subject);
      return res.json(subjectData);
    } catch (err) {
      throw err;

    }
  }
  const userAll = await User.findAll({ order: [['createdAt', 'desc']] });
  for (let i = 0; i < userAll.length; i++) {
    brr.push({ id: userAll[i].id, name: userAll[i].name, cardId: userAll[i].cardId, subject: userAll[i].subject });
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

export default create


