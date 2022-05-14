type Item = {
    id: string;
    title: string;
    des:string;
    banner: string;
    details:any[];
  };
  const Items: Item[] = [
    {
      id: "1",
      title: "Qwerty-Learner",
      des:"this is for sdfsdfsdfsfsfsfsdthis is for sdfsdfsdfsfsfsfsdthis is for sdfsdfsdfsfsfsfsd",
      banner: "/profilo/logos/logo1.png",
      details:[
          {
              id:1,
              text:"12313313",
              img:"/profilo/logos/logo1/1.png",
          },
          {
            id:2,
            text:"123121332423534534563463",
            img:"/profilo/logos/logo1/2.png",
        },
        {
            id:3,
            text:"fgdfdhfhfhesfwese",
            img:"/profilo/logos/logo1/3.png",
        },
        {
            id:4,
            text:"sdgdfdfdfdfdfdfdfg",
            img:"/profilo/logos/logo1/4.png",
        }
      ]
    },
  ];
  export default Items