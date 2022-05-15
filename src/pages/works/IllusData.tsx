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
    title: "Decoration Company",
    des: "These illustrations were provided for a renovation company that advocated the need to consider the needs of the client from multiple perspectives. They have adopted IoT technology and information technology to support their services.",
    banner: "/profilo/item1.png",
    details: [
      {
        id: 1,
        text: "根据关键词绘制对应的插画，这一页体现的是良好的居住环境需要考虑的方方面面",
        img: "/profilo/item1/1.png",
      },
      {
        id: 2,
        text: "诗意的居住必定是基于功能的考虑，因此让客户了解建筑技术的关键特性也很重要",
        img: "/profilo/item1/2.png",
      },
      {
        id: 3,
        text: "居住不仅是几个房间，也是一栋楼一个社区，涉及基础设施和衣食住行的长周期体验",
        img: "/profilo/item1/3.png",
      },
      {
        id: 4,
        text: "体现企业文化和服务特色，抽象的描述转换为插画表述",
        img: "/profilo/item1/4.png",
      },
    ],
  },
];
export default Items;
