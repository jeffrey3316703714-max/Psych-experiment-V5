// Questionnaire text from Psych experiment (1).pdf (November 2026).
// Important editorial correction: negative field-trip Plan A says 300 miss
// (the uploaded PDF says 100 miss, which is not equivalent to 100 attend).
// Both versions contain the same five preference questions in the same order.
export const questions = {
  "A": [
    {
      "body": "A local school has organized a field trip to Sentosa for 400 high school students. The trip has been planned for several weeks, and students have already signed up and received permission to attend.\n\nHowever, just a few days before the trip, the bus company informs the school that there has been a problem with the transportation booking. Because of this, all 400 students are now at risk of missing the trip.\n\nThe school has come up with two possible solutions, but it can only choose one.",
      "a": "100 students will definitely be able to go on the trip.",
      "b": "There is a 1/4 chance that all 400 students will be able to go, but a 3/4 chance that no students will be able to go.",
      "title": "Field trip to Sentosa",
      "type": "main"
    },
    {
      "body": "A local school is planning to make some changes to the high school cafeteria to improve students' lunchtime experience. Recently, students have mentioned that the cafeteria can get crowded, especially during the busiest lunch periods. Some students have also suggested that having more food options would make lunchtime more enjoyable.\n\nTo address these concerns, the school is considering two possible improvements. However, due to budget and space limitations, only one option can be implemented this semester.\n\nBoth proposals have received positive feedback from students, but the school wants to understand which improvement students would prefer before making a final decision.\n\nAs one of the student representatives, which option would you prefer?",
      "a": "Add 3 new food stations. It may reduce the average lunchtime waiting time from 15 minutes to 8 minutes. This option is supported by most of the principles.",
      "b": "Add 12 new meal options to the cafeteria menu, increasing the total number of available meals from 18 to 30. This option is supported by most of the student representatives.",
      "title": "School cafeteria",
      "type": "distraction"
    },
    {
      "body": "A city council is holding a meeting to discuss how to improve the city's environment and quality of life. Over the past decade, the city has experienced rapid industrial growth, leading to increased air pollution, traffic congestion, and a shortage of green spaces. Many residents have raised concerns about these issues, while others believe that industrial development is important for providing jobs and supporting the local economy.\n\nThe city council has been given funding to introduce a new development plan over the next five years. During the meeting, council members proposed two different approaches. One focuses on reducing industrial activity to improve environmental conditions, while the other focuses on developing new public facilities and green spaces without directly reducing industrial activity. Due to budget limitations, the council can only approve one proposal.\n\nSelect one of the following programs that you will prefer as a city council member.",
      "a": "Remove 50% of the city's industrial facilities and convert 200 hectares of industrial land into green spaces and public parks. However, this may result in some amount of unemployment in the city.",
      "b": "Introduce 1,000 new trees, build 15 public parks, and create 25 kilometers of cycling paths throughout the city. However, the extra cost created by the program (such as the maintenance cost of cycling paths) may exceed the original budget.",
      "title": "City environment",
      "type": "distraction"
    },
    {
      "body": "A village located in a rural area of South Africa has recently experienced a severe drought, causing a substantial decrease in wheat production, which is one of the villagers' main sources of income. Due to the prolonged lack of rainfall and limited access to water, many farmers have struggled to maintain their crops, resulting in lower harvests and significant financial losses. As a result, many families are facing difficulties meeting their daily needs, while the village's economy has been negatively affected.\n\nTo address this issue, the local government has decided to allocate funding to improve agricultural productivity and strengthen the village's ability to cope with future droughts. However, due to limited financial resources, the government can only implement one development program over the next five years. During a village council meeting, two proposals were introduced. The first focuses on improving water availability and irrigation systems to support existing wheat farms, while the second focuses on encouraging farmers to diversify their crops and adopt more drought-resistant agricultural practices.\n\nAs a member of the village council, which of the following programs would you prefer to implement?",
      "a": "Construct a new water reservoir and install irrigation systems across 200 hectares of farmland to improve water access and maintain wheat production during drought seasons.",
      "b": "Provide 150 farming households with drought-resistant crop seeds, agricultural training, and financial assistance to encourage crop diversification and reduce dependence on wheat production.",
      "title": "Village agriculture",
      "type": "distraction"
    },
    {
      "body": "A business school at the University of Oregon has recently noticed a concerning decline in the sophistication and overall quality of the business models proposed by students for their final projects. After analyzing various factors, including students’ completion rates for assignments outside of class, academic performance, and changes in teaching methods, the professors concluded that the most significant contributing factor is the increase in class sizes over recent years.\n\nAs class sizes continue to grow, professors have less time to review individual students’ business models and provide detailed, constructive feedback. Consequently, many students struggle to identify weaknesses in their proposals, refine their business strategies, and develop more innovative and practical business models.\n\nTo address this issue, the university administration has decided to take some action. During a faculty meeting, two different proposals were introduced. Due to budget constraints, the university can only implement one of the proposed programs.\n\nAs a member of the university's academic committee, which of the following programs would you prefer to implement?",
      "a": "Reduce the average class size from 60 to 30 students by hiring additional professors and introducing more class sections, allowing students to receive more personalized feedback throughout the development of their business models. Moreover, the existing class of 120 students will be split into two separate classes.",
      "b": "Maintain the current class sizes while hiring 10 graduate teaching assistants, organizing weekly business model development workshops, and establishing a mentoring program that connects students with experienced business professionals to provide additional guidance and feedback. The existing class of 120 will be split into groups, ensuring that not more than 15 students will have a teaching assistant that they can directly get in touch with.",
      "title": "University education",
      "type": "distraction"
    },
    {
      "body": "Recently, a restaurant located along the Singapore River noticed a significant drop in its sales. If this trend continues, the restaurant might not be able to cover its rent this month. The manager investigated the reasons behind the decline and discovered that several new restaurants had recently opened nearby, offering similar dishes at more competitive prices.\n\nAfter analyzing customer feedback and sales records, the manager concluded that the restaurant's biggest challenge was its declining ability to attract customers in an increasingly competitive market. Although the restaurant has maintained its food quality and service standards, its relatively high prices and limited promotional activities have made it difficult to compete with other restaurants in the area.\n\nTo address this issue, the restaurant owner has decided to allocate an additional budget of $15,000 to improve sales and attract more customers over the next three months. During a management meeting, two different proposals were introduced. Due to financial constraints, the restaurant can only implement one of the proposed programs.\n\nAs the restaurant manager, which of the following programs would you prefer to implement?",
      "a": "Introduce a 20% discount on selected menu items and offer promotional meal packages for the next three months to attract more customers and increase sales volume, despite potentially reducing the profit earned from each meal. This is the option that is supported by most of the management team.",
      "b": "Invest $15,000 in social media advertising, collaborations with local food influencers, and improvements to the restaurant's interior design to attract new customers and enhance the overall dining experience, while maintaining existing menu prices. This is supported by the front-of-house team.",
      "title": "Restaurant strategy",
      "type": "distraction"
    },
    {
      "body": "The high school has arranged for 600 high school students to attend a concert at the Esplanade in Singapore. Many students have been looking forward to the event, and the school has already made arrangements for everyone to attend.\n\nHowever, the event organizer contacts the school to explain that there has been a mistake with the ticket reservations. As a result, all 600 students are now at risk of losing their tickets.\n\nThe organizer offers the school two possible solutions, but only one can be chosen.",
      "a": "400 students will definitely not be able to attend the concert.",
      "b": "There is a 1/3 chance that no students will lose their tickets, but a 2/3 chance that all 600 students will lose their tickets.",
      "title": "Concert at the Esplanade",
      "type": "main"
    }
  ],
  "B": [
    {
      "body": "A local school has organized a field trip to Sentosa for 400 high school students. The trip has been planned for several weeks, and students have already signed up and received permission to attend.\n\nHowever, just a few days before the trip, the bus company informs the school that there has been a problem with the transportation booking. Because of this, all 400 students are now at risk of missing the trip.\n\nThe school has come up with two possible solutions, but it can only choose one.",
      "a": "300 students will definitely miss the trip.",
      "b": "There is a 1/4 chance that no students will miss the trip, but a ¾ chance that all 400 students will miss the trip.",
      "title": "Field trip to Sentosa",
      "type": "main"
    },
    {
      "body": "A local school is planning to make some changes to the high school cafeteria to improve students' lunchtime experience. Recently, students have mentioned that the cafeteria can get crowded, especially during the busiest lunch periods. Some students have also suggested that having more food options would make lunchtime more enjoyable.\n\nTo address these concerns, the school is considering two possible improvements. However, due to budget and space limitations, only one option can be implemented this semester.\n\nBoth proposals have received positive feedback from students, but the school wants to understand which improvement students would prefer before making a final decision.\n\nAs one of the student representatives, which option would you prefer?",
      "a": "Add 3 new food stations. It may reduce the average lunchtime waiting time from 15 minutes to 8 minutes. This option is supported by most of the principles.",
      "b": "Add 12 new meal options to the cafeteria menu, increasing the total number of available meals from 18 to 30. This option is supported by most of the student representatives.",
      "title": "School cafeteria",
      "type": "distraction"
    },
    {
      "body": "A city council is holding a meeting to discuss how to improve the city's environment and quality of life. Over the past decade, the city has experienced rapid industrial growth, leading to increased air pollution, traffic congestion, and a shortage of green spaces. Many residents have raised concerns about these issues, while others believe that industrial development is important for providing jobs and supporting the local economy.\n\nThe city council has been given funding to introduce a new development plan over the next five years. During the meeting, council members proposed two different approaches. One focuses on reducing industrial activity to improve environmental conditions, while the other focuses on developing new public facilities and green spaces without directly reducing industrial activity. Due to budget limitations, the council can only approve one proposal.\n\nSelect one of the following programs that you will prefer as a city council member.",
      "a": "Remove 50% of the city's industrial facilities and convert 200 hectares of industrial land into green spaces and public parks. However, this may result in some amount of unemployment in the city.",
      "b": "Introduce 1,000 new trees, build 15 public parks, and create 25 kilometers of cycling paths throughout the city. However, the extra cost created by the program (such as the maintenance cost of cycling paths) may exceed the original budget.",
      "title": "City environment",
      "type": "distraction"
    },
    {
      "body": "A village located in a rural area of South Africa has recently experienced a severe drought, causing a substantial decrease in wheat production, which is one of the villagers' main sources of income. Due to the prolonged lack of rainfall and limited access to water, many farmers have struggled to maintain their crops, resulting in lower harvests and significant financial losses. As a result, many families are facing difficulties meeting their daily needs, while the village's economy has been negatively affected.\n\nTo address this issue, the local government has decided to allocate funding to improve agricultural productivity and strengthen the village's ability to cope with future droughts. However, due to limited financial resources, the government can only implement one development program over the next five years. During a village council meeting, two proposals were introduced. The first focuses on improving water availability and irrigation systems to support existing wheat farms, while the second focuses on encouraging farmers to diversify their crops and adopt more drought-resistant agricultural practices.\n\nAs a member of the village council, which of the following programs would you prefer to implement?",
      "a": "Construct a new water reservoir and install irrigation systems across 200 hectares of farmland to improve water access and maintain wheat production during drought seasons.",
      "b": "Provide 150 farming households with drought-resistant crop seeds, agricultural training, and financial assistance to encourage crop diversification and reduce dependence on wheat production.",
      "title": "Village agriculture",
      "type": "distraction"
    },
    {
      "body": "A business school at the University of Oregon has recently noticed a concerning decline in the sophistication and overall quality of the business models proposed by students for their final projects. After analyzing various factors, including students’ completion rates for assignments outside of class, academic performance, and changes in teaching methods, the professors concluded that the most significant contributing factor is the increase in class sizes over recent years.\n\nAs class sizes continue to grow, professors have less time to review individual students’ business models and provide detailed, constructive feedback. Consequently, many students struggle to identify weaknesses in their proposals, refine their business strategies, and develop more innovative and practical business models.\n\nTo address this issue, the university administration has decided to take some action. During a faculty meeting, two different proposals were introduced. Due to budget constraints, the university can only implement one of the proposed programs.\n\nAs a member of the university's academic committee, which of the following programs would you prefer to implement?",
      "a": "Reduce the average class size from 60 to 30 students by hiring additional professors and introducing more class sections, allowing students to receive more personalized feedback throughout the development of their business models. Moreover, the existing class of 120 students will be split into two separate classes.",
      "b": "Maintain the current class sizes while hiring 10 graduate teaching assistants, organizing weekly business model development workshops, and establishing a mentoring program that connects students with experienced business professionals to provide additional guidance and feedback. The existing class of 120 will be split into groups, ensuring that not more than 15 students will have a teaching assistant that they can directly get in touch with.",
      "title": "University education",
      "type": "distraction"
    },
    {
      "body": "Recently, a restaurant located along the Singapore River noticed a significant drop in its sales. If this trend continues, the restaurant might not be able to cover its rent this month. The manager investigated the reasons behind the decline and discovered that several new restaurants had recently opened nearby, offering similar dishes at more competitive prices.\n\nAfter analyzing customer feedback and sales records, the manager concluded that the restaurant's biggest challenge was its declining ability to attract customers in an increasingly competitive market. Although the restaurant has maintained its food quality and service standards, its relatively high prices and limited promotional activities have made it difficult to compete with other restaurants in the area.\n\nTo address this issue, the restaurant owner has decided to allocate an additional budget of $15,000 to improve sales and attract more customers over the next three months. During a management meeting, two different proposals were introduced. Due to financial constraints, the restaurant can only implement one of the proposed programs.\n\nAs the restaurant manager, which of the following programs would you prefer to implement?",
      "a": "Introduce a 20% discount on selected menu items and offer promotional meal packages for the next three months to attract more customers and increase sales volume, despite potentially reducing the profit earned from each meal. This is the option that is supported by most of the management team.",
      "b": "Invest $15,000 in social media advertising, collaborations with local food influencers, and improvements to the restaurant's interior design to attract new customers and enhance the overall dining experience, while maintaining existing menu prices. This is supported by the front-of-house team.",
      "title": "Restaurant strategy",
      "type": "distraction"
    },
    {
      "body": "The high school has arranged for 600 high school students to attend a concert at the Esplanade in Singapore. Many students have been looking forward to the event, and the school has already made arrangements for everyone to attend.\n\nHowever, the event organizer contacts the school to explain that there has been a mistake with the ticket reservations. As a result, all 600 students are now at risk of losing their tickets.\n\nThe organizer offers the school two possible solutions, but only one can be chosen.",
      "a": "200 students will definitely get to attend the concert.",
      "b": "There is a 1/3 chance that all 600 students will get to attend, but a 2/3 chance that no students will get to attend.",
      "title": "Concert at the Esplanade",
      "type": "main"
    }
  ]
};
