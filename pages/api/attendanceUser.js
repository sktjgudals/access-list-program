import { NOW } from 'sequelize';

//오른쪽 출석
const { User, Post} = require('/models/index');

export default async function userToInput(req, res) {
      const cardId = req.body.state.id;
      const  name =  req.body.state.name;
      const  temp = req.body.state.temp;
      const class1  =req.body.state.class1;
      const class2  =req.body.state.class2;
      const class3  =req.body.state.class3;
      const class4  =req.body.state.class4;
      const cl = class1 + ',' + class2 + ',' + class3 + ',' + class4;
      try{
         const created=  await Post.create({name:name,cardId:cardId,temp:temp,subject:cl}); 
         return res.json(null);
      }catch(err){
         throw err;
      }
}