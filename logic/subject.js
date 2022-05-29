import { User, Post, Mona, Tuea, Weda, Thua, Fria } from '../models';
const { Op } = require('sequelize');

const db = require('../models/db');
const moment = require('moment');

const classNames = ["급식", "국어", "영어기초", "영어중급", "중국어기초", "중국어중급", "일본어기초", "일본어중급", "한자", "역사", "서예", "문인학", "수채화", "발도로프", "웰빙요가", "한국무용기초", "한국무용중급", "사물놀이", "풍물놀이", "문서활용법", "유튜브활용법", "컴퓨터기초", "센터SNS활용법", "스마트폰기초", "스마트폰중급", "라지볼A", "라지볼B", "시니어로빅", "노래교실", "댄스스포츠기초", "댄스스포츠중급", "사교댄스기초", "사교댄스중급", "라인댄스", "민요"]
const classValues = ["급식", "korean", "english1", "english2", "chinese1", "chinese2", "japanese1", "japanese2", "chinieseChar", "history", "calligraphy", "drawing", "watercolor", "waldorf", "yoga", "koreaDance1", "koreaDance2", "thingPlay", "windPlay", "doc", "youtube", "computer", "sns", "phone1", "phone2", "largeballA", "largeballB", "senior", "sing", "sportDance1", "sportDance2", "fourDance1", "fourDance2", "lineDance", "koreanSing"]

function translation(value) {
    const index = classValues.indexOf(value)
    return classNames[index]
}

async function subjectSelect(subject) {
    console.log(subject);
    let dody = [];
    let arr = [];
    await User.findAll({ where: { subject: { [Op.like]: "%" + subject + "%" } } }).then(pross => {
        for (let i = 0; i < pross.length; i++) {
            dody.push(pross[i].id);
            arr.push({ id: pross[i].id, name: pross[i].name, cardId: pross[i].cardId, subject: subject });
        }
        for (let i = 0; i < arr.length; i++) {
            let kor = []
            const newArr = arr[i].subject.split(",")
            for (let t = 0; t < newArr.length; t++) {
                const b = translation(newArr[t]);
                kor.push(b)
            }
            arr[i].subject = kor.toString()
        }
    });

    if (subject === 'korean') {
        for (let i = 0; i < arr.length; i++) {
            await Mon.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Wed.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Fri.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'english1') {
        for (let i = 0; i < arr.length; i++) {
            await Wed.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'english2') {
        for (let i = 0; i < arr.length; i++) {
            await Mon.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Thu.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }

    if (subject === 'chinese1') {
        for (let i = 0; i < arr.length; i++) {
            await Fri.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }

    if (subject === 'chinese2') {
        for (let i = 0; i < arr.length; i++) {
            await Tue.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Thu.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }

    if (subject === 'japanese1') {
        for (let i = 0; i < arr.length; i++) {
            await Tue.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }

    if (subject === 'japanese2') {
        for (let i = 0; i < arr.length; i++) {
            await Tue.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Fri.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }

    if (subject === 'chineseChar') {
        for (let i = 0; i < arr.length; i++) {
            await Mon.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Wed.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }

    if (subject === 'history') {
        for (let i = 0; i < arr.length; i++) {
            await Thu.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }

    if (subject === 'calligraphy') {
        for (let i = 0; i < arr.length; i++) {
            await Tue.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Thu.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }


    if (subject === 'drawing') {
        for (let i = 0; i < arr.length; i++) {
            await Wed.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Fri.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }


    if (subject === 'watercolor') {
        for (let i = 0; i < arr.length; i++) {
            await Wed.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Fri.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }

    if (subject === 'waldorf') {
        for (let i = 0; i < arr.length; i++) {
            await Mon.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Thu.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }

    if (subject === 'yoga') {
        for (let i = 0; i < arr.length; i++) {
            await Wed.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Fri.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }

    if (subject === 'koreaDance1') {
        for (let i = 0; i < arr.length; i++) {
            await Fri.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }

    if (subject === 'koreaDance2') {
        for (let i = 0; i < arr.length; i++) {
            await Mon.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Tue.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }

    if (subject === 'koreanSing') {
        for (let i = 0; i < arr.length; i++) {
            await Tue.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Thu.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'lineDance') {
        for (let i = 0; i < arr.length; i++) {
            await Tue.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Wed.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'fourDance2') {
        for (let i = 0; i < arr.length; i++) {
            await Mon.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Thu.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'fourDance1') {
        for (let i = 0; i < arr.length; i++) {
            await Mon.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'senior') {
        for (let i = 0; i < arr.length; i++) {
            await Tue.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Thu.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'sing') {
        for (let i = 0; i < arr.length; i++) {
            await Mon.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Thu.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'sportDance1') {
        for (let i = 0; i < arr.length; i++) {
            await Tue.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'sportDance2') {
        for (let i = 0; i < arr.length; i++) {
            await Tue.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Fri.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'thingPlay') {
        for (let i = 0; i < arr.length; i++) {
            await Wed.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Fri.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'windPlay') {
        for (let i = 0; i < arr.length; i++) {
            await Fri.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'doc') {
        for (let i = 0; i < arr.length; i++) {
            await Mon.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Wed.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'youtube') {
        for (let i = 0; i < arr.length; i++) {
            await Mon.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Wed.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'computer') {
        for (let i = 0; i < arr.length; i++) {
            await Tue.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Thu.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'sns') {
        for (let i = 0; i < arr.length; i++) {
            await Tue.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Thu.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'phone1') {
        for (let i = 0; i < arr.length; i++) {
            await Mon.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Wed.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'phone2') {
        for (let i = 0; i < arr.length; i++) {
            await Mon.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Wed.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'largeballA') {
        for (let i = 0; i < arr.length; i++) {
            await Tue.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Thu.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    if (subject === 'largeballB') {
        for (let i = 0; i < arr.length; i++) {
            await Tue.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
            await Thu.findOrCreate({
                where: { UserId: arr[i].id, subject: { [Op.and]: { [Op.like]: "%" + subject + "%" } } }, defaults: {
                    name: arr[i].name, cardId: arr[i].cardId, subject: subject, UserId: arr[i].UserId
                }
            });
        }
    }
    return arr;
}

export default subjectSelect

                // 과목 한개 짤라서 넣는 로직
                //     for (let i = 0; i < arr.length; i++) {
                    //  await Fri.findOrCreate({where:{UserId:arr[i].id,subject:{[Op.and]:{[Op.like]:"%"+subject+"%"}}},defaults:{
                        //                  name:arr[i].name,cardId:arr[i].cardId,subject:subject,UserId:arr[i].UserId
                        //              }})
                        //             }
                        //     db.query(`select UserId, group_concat(subject) from fris group by UserId `, (err, user) => {
                            //     let userArr = [];
                            //     for (let i = 0; i < subjectData.length; i++) {
                                //         userArr.push({ id: subjectData[i].id, subject: user[i]["group_concat(subject)"] })
                                //     }
                                //     // res.json(userArr);
                                //     a(userArr);
                                // });
                                // console.log(a());
                                // const ase=   await Fri.findAll({ where: { subject:{[Op.like]:"%" + 'japanese' + "%"}}});
                                // // console.log(ase);
                                // ase.forEach(function(el,index,arr2){
                                //     body.push(el.UserId);
                                // });
                                // const ad = dody.filter(x=>body.includes(x));
                                // const asd=   await Fri.findAll({ where: { subject:{[Op.like]:"%" + 'chinese' + "%"}}});
                                // asd.forEach(function(el){
                                //     pody.push(el.UserId)
                                // });
                                // const as  = dody.filter(x=>pody.includes(x));
                                //     console.log(as);
                                //     // console.log(pody[0]);
                                // if(body[0]==='japanese'){
                                //     for(let i=0;i<ad.length;i++){
                                //         await  Fri.update({subject:'yoga,japanese'},{where:{UserId:ad[i]}});
                                //     }
                                // }
                                // if(pody[0]==='chinese'){
                                //     for(let i = 0; i<as.length; i++){
                                //         await  Fri.update({subject:'yoga,chinese'},{where:{UserId:as[i]}});
                                //     }
                                // }
                                // for (let i = 0; i < arr.length; i++) {
                                //     await Fri.findOrCreate({where:{UserId:arr[i].id,subject:{[Op.and]:{[Op.like]:"%"+subject+"%"}}},defaults:{
                                //         name:arr[i].name,cardId:arr[i].cardId,subject:subject,UserId:arr[i].UserId
                                //     }});
                                // }



