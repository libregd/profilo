type Item = {
  id: string;
  title: string;
  des: string;
  banner: string;
  details: any[];
};
const Items: Item[] = [
  {
    id: "1",
    title: "Qwerty-Learner",
    des: "this is a open source project, When I known that has high-completed,so I tried to support some Designs to it.",
    banner: "/profilo/logos/logo1.png",
    details: [
      {
        id: 1,
        text: "web version is first, then the Mac version came on,different flatform have different standards and features, the black-white lined version is special to print on paper.",
        img: "/profilo/logos/logo1/1.png",
      },
      {
        id: 2,
        text: "this project is about typing English words, because many people that not native English Learner didn't have many practices to type English by keyboard, but When they work on the Internet ,especially IT-related work, Wow, too many time need to typing English good and need accurately input. The developers design for people want to memorize words and practice typings.",
        img: "/profilo/logos/logo1/2.png",
      },
      {
        id: 3,
        text: "The print on the T-shirt is made for people that attending the developers conference.The T-shirt has their Github name on it. On the back of the T-shirt is an advertisement that hopefully be seen. They carry some stickers to give to others.",
        img: "/profilo/logos/logo1/3.png",
      },
      {
        id: 4,
        text: "Every time I drink water, I remind myself to practice my English on Qwerty-Learner",
        img: "/profilo/logos/logo1/4.png",
      },
    ],
  },
  
];
export default Items;
