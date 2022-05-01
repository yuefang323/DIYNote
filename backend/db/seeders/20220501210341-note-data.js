"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Notes",
      [
        {
          title: "Kimono Style Dress",
          content: "1. Fold 2 1/2 yards fabric in half. 2. sew along sides and top. 3. cut out neckline. 4. Final Kimono style dress.",
          notebookId: 1, 
          userId: 1,
        },
        {
          title: "skirt",
          content: "Change the GAP yellow long dress to a high waisted pleated Skirt. Follow instructions on Youtube https://www.youtube.com/watch?v=lIogRXIrmfM",
          notebookId: 1, 
          userId: 1,
        },
        {
          title: "girl diy dress",
          content: "learn to diy a girl dress from Pinterest",
          notebookId: 1, 
          userId: 1,
        },
        {
          title: "popular-curly-hair",
          content: "4 types: Wavy, loose, tight and coily curls",
          notebookId: 2, 
          userId: 1,
        },
        {
          title: "try-hair-color",
          content: "Warm Brunettes, Natural Silver or Mushroom Brown.",
          notebookId: 2, 
          userId: 1,
        },
        {
          title: "paybills",
          content: "pay utilities, pay internet fees, pay property taxes, pay credit cards.",
          notebookId: 3, 
          userId: 1,
        },
        {
          title: "try-new-snacks",
          content: "Reese's Peanut Butter Cups, Milky Way, 100 Grand",
          notebookId: 3, 
          userId: 1,
        },
        {
          title: "first-try",
          content: "want to utilize this note to improve",
          notebookId: 4, 
          userId: 2,
        },
        {
          title: "2nd-try",
          content: "just want to test",
          notebookId: 4, 
          userId: 2,
        },
        {
          title: "design-a-cute-web-icon",
          content: "hello kitty theme or pokemon theme? size of the icon?",
          notebookId: 5, 
          userId: 2,
        },
        {
          title: "mom's b-day",
          content: "10/2, send her a handmade birthday cake, buy her a beautiful dress",
          notebookId: 6, 
          userId: 3,
        },
        {
          title: "son's 1st day in school",
          content: "9/2, remember to bring school supplies, prepare a pizza for school lunch",
          notebookId: 6, 
          userId: 3,
        },
        {
          title: "homie's wedding day",
          content: "5/3, prepare a surprise for her",
          notebookId: 6, 
          userId: 3,
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notes", null, {});
  },
};
