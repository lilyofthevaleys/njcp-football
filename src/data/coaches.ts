export type Coach = {
  id: string;
  name: string;
  position: string;
  team: string;
  image?: string;
  bio?: string;
  phone?: string;
  email?: string;
  headshot?: string;
  experienceYears: number;
  recordWins: number;
  recordLosses: number;
  championships: number;
};

export const coaches: Coach[] = [
  {
    id: '1',
    name: 'Robert Wilson',
    position: 'Head Coach',
    team: 'Panthers',
    image: '/placeholder-coach.jpg',
    headshot: '/placeholder-coach.jpg',
    phone: '435-586-5470',
    email: 'dlfitzgerald@suu.edu',
    bio: `Coach DeLane Fitzgerald is entering his fourth year at the helm of the Thunderbirds football program. The 2024 season was a milestone year for Fitzgerald and the Thunderbirds. Southern Utah posted a 7-5 record, including a historic 27-24 victory at UTEP, marking the program’s first win over an FBS opponent in more than a decade. Fitzgerald also reached the 100-win mark in the 2024 season, becoming the first head coach in SUU history to achieve the feat. He currently sits at 104 career wins and has continued to build a strong foundation for the program's future.

Fitzgerald brought about a significant change in Southern Utah Football, leading to its first winning season since 2017 when the Thunderbirds finished 6-5 overall in 2023, going 4-2 in the inaugural season as members of the United Athletic Conference. In his first season, Fitzgerald led SUU to a 5-6 overall record with a 2-3 mark in Western Athletic Conference play.

The leader of the Thunderbirds came to Cedar City with more than 20 years of college football coaching experience, including 13 years as a head coach and a proven track record of building programs by implementing a winning culture. Fitzgerald joined Southern Utah in 2021 by way of Frostburg State University in Maryland, where he was the head football coach for eight seasons.

In 2014, Fitzgerald inherited an FSU program coming off its eighth consecutive losing season with just 18 wins in eight years. After recording a 4-6 record in his first season as head coach, Fitzgerald led the Bobcats to winning seasons every year, including double-digit wins four times.

Under Fitzgerald’s leadership, Frostburg State won New Jersey Athletic Conference championships in 2016 and 2018 and made NCAA Division III playoff appearances in 2017 and 2018. The Bobcats also won a Division III bowl game in 2016. After the 2018 season, Fitzgerald led Frostburg State's transition to NCAA Division II membership and quickly found success in the form of a Mountain East Conference championship in 2021 with a record of 10-1.

In 2023, Fitzgerald was inducted into the Frostburg State Hall of Fame. He is the winningest coach in program history, with both the most wins and the highest winning percentage. Fitzgerald was named conference coach of the year three times while leading the Bobcats. Eight All-American awards were bestowed on athletes under his direction. He won the final three Regents Cup games played to keep the trophy in Frostburg.

Before his historic run at Frostburg State, Fitzgerald spent five years as the head coach at Southern Virginia University in Buena Vista, Virginia. His teams at SVU progressed every season after going 3-8 in his first year and finishing with an 8-2 record and No. 1 ranking in the USCAA Coaches Poll in 2013. The Knights have not achieved a winning season since Fitzgerald departed for Frostburg State.

Before taking over as head coach in February of 2009, Fitzgerald spent three seasons as the offensive coordinator and offensive line coach at Southern Virginia. Prior to his time in Buena Vista, Fitzgerald spent one season as the offensive coordinator at Bethel College in McKenzie, Tennessee. He also spent two years as the special teams coordinator at Tennessee-Martin.

Fitzgerald played football at Potomac State College before transferring and playing his final seasons as a fullback at James Madison University. After leading his team to an Atlantic 10 Conference championship in 1999, Fitzgerald began his coaching career at Bridgton Academy in Maine in 2000 before returning to James Madison as a defensive assistant in 2001.

SUU's coach holds a master's degree in education from Bethel College, a bachelor's degree in kinesiology from James Madison, and an associate degree in physical education from Potomac State College.

What They're Saying About Fitzgerald:

"DeLane Fitzgerald is an excellent choice to lead SUU football. I've known DeLane for almost 10 years. I've watched him build young people into team-oriented, successful individuals. His prior experience as a head coach will serve him well as he tackles this next challenge in his career."

-Ed Lamb, BYU Assistant Head Coach and former SUU Head Coach

"I want to thank Coach Fitzgerald for the work he has done guiding our student-athletes over the last eight years. Under his direction, the Frostburg State football program has not only improved on the field, but off the field as well. I would like to congratulate the Southern Utah community on a great hire and wish them success in future."

-Troy Dell, Frostburg State University Director of Athletics

"I want to thank Coach Fitzgerald for his eight years of leadership at Frostburg State University.  Not only did he restore a winning tradition at FSU, but he also ensured that his players were successful in life as well as on the field.  During his tenure, the Frostburg State football team was part of the campus and community fabric.  I wish him, his wife, Kim, and daughters, Mattie, Afton and Laila, all the best and success in this new chapter in their lives."

-Ronald Nowaczyk, Frostburg State University President

"DeLane's passion for developing men both on and off the field of play was clear as he progressed through the interview process," said SUU Director of Athletics Debbie Corum. "I knew we had the right person when one of our student-athletes talked about wanting to run through a brick wall for that man. In my experience, that is the key to having a successful coach. DeLane became familiar with recruiting in the state of Utah when he was the head football coach at Southern Virginia, and since that time he and his family have wanted to move to Southern Utah.  We look forward to welcoming DeLane and his family to Cedar City and eagerly await spring football training with great anticipation."`,
    experienceYears: 15,
    recordWins: 112,
    recordLosses: 45,
    championships: 3,
  },
  {
    id: '2',
    name: 'Michael Thomas',
    position: 'Offensive Coordinator',
    team: 'Tigers',
    image: '/placeholder-coach.jpg',
    bio: 'Innovative play-caller focused on maximizing player strengths.',
    experienceYears: 12,
    recordWins: 98,
    recordLosses: 32,
    championships: 2,
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    position: 'Defensive Coordinator',
    team: 'Eagles',
    image: '/placeholder-coach.jpg',
    bio: 'Defensive strategist known for disciplined and high-performing units.',
    experienceYears: 8,
    recordWins: 76,
    recordLosses: 28,
    championships: 1,
  },
];