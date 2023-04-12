const answers = [
    {
        "id": "1",
        "answer": "YES"
    },
    {
        "id": "2",
        "answer": "NO"
    },
    {
        "id": "3",
        "answer": "OF COURSE"
    },
    {
        "id": "4",
        "answer": "OF COURSE NOT"
    },
    {
        "id": "5",
        "answer": "BAD IDEA"
    },
    {
        "id": "6",
        "answer": "GOOD IDEA"
    },
    {
        "id": "7",
        "answer": "YOU ARE SURE TO HAVE SUPPORT"
    },
    {
        "id": "8",
        "answer": "YOU COULD FIND YOURSELF UNABLE TO COMPROMISE"
    },
    {
        "id": "9",
        "answer": "SEEK OUT MORE OPTIONS"
    },
    {
        "id": "10",
        "answer": "TRY SOMETHING ELSE"
    },
    {
        "id": "11",
        "answer": "ASK A FRIEND"
    },
    {
        "id": "12",
        "answer": "DOUBT IT"
    },
    {
        "id": "13",
        "answer": "IT WILL AFFECT HOW OTHERS SEE YOU"
    },
    {
        "id": "14",
        "answer": "DON'T WAIT"
    },
    {
        "id": "15",
        "answer": "MISHAPS ARE HIGHLY PROBABLE"
    },
    {
        "id": "16",
        "answer": "REPRIORITIZE WHAT IS IMPORTANT"
    },
    {
        "id": "17",
        "answer": "IT WOULD BE INADVISABLE"
    },
    {
        "id": "18",
        "answer": "SETTING PRIORITIES WILL BE A NECESSARY PART OF THE PROCESS"
    },
    {
        "id": "19",
        "answer": "IT WOULD BE BETTER TO FOCUS ON YOUR WORK"
    },
    {
        "id": "20",
        "answer": "DON'T BET ON IT"
    },
    {
        "id": "21",
        "answer": "ACCEPT A CHANGE TO YOUR ROUTINE"
    },
    {
        "id": "22",
        "answer": "IT WILL BE A PLEASURE"
    },
    {
        "id": "23",
        "answer": "FINISH SOMETHING ELSE FIRST"
    },
    {
        "id": "24",
        "answer": "LET IT GO"
    },
    {
        "id": "25",
        "answer": "IT IS SOMETHING YOU WON'T FORGET"
    },
    {
        "id": "26",
        "answer": "THERE IS A SMALL PRICE TO PAY"
    },
    {
        "id": "27",
        "answer": "FOLLOW SOMEONE ELSE'S LEAD"
    },
    {
        "id": "28",
        "answer": "IT SEEM ASSURED"
    },
    {
        "id": "29",
        "answer": "TRUST YOUR INTUITION"
    },
    {
        "id": "30",
        "answer": "YOU MAY HAVE OPPOSITION"
    },
    {
        "id": "31",
        "answer": "NOW YOU CAN"
    },
    {
        "id": "32",
        "answer": "IT IS WORTH THE TROUBLE"
    },
    {
        "id": "33",
        "answer": "UPGRADE ANY WAY YOU CAN"
    },
    {
        "id": "34",
        "answer": "STARTLING EVENTS MAY OCCUR AS A RESULT"
    },
    {
        "id": "35",
        "answer": "ONLY DO IT ONCE"
    },
    {
        "id": "36",
        "answer": "REMAIN FLEXIBLE"
    },
    {
        "id": "37",
        "answer": "PREPARE FOR THE UNEXPECTED"
    },
    {
        "id": "38",
        "answer": "YOU'LL HAVE TO MAKE IT UP AS YOU GO"
    },
    {
        "id": "39",
        "answer": "IT WILL CREATE A STIR"
    },
    {
        "id": "40",
        "answer": "BETTER TO WAIT"
    },
    {
        "id": "41",
        "answer": "RECONSIDER YOUR APPROACH"
    },
    {
        "id": "42",
        "answer": "YOU ARE TOO CLOSE TO SEE"
    },
    {
        "id": "43",
        "answer": "IT CANNOT FALL"
    },
    {
        "id": "44",
        "answer": "YOU'LL NEED TO TAKE THE INITIATIVE"
    },
    {
        "id": "45",
        "answer": "COUNT TO 10; ASK AGAIN"
    },
    {
        "id": "46",
        "answer": "DON'T BE PRESSURED INTO A ACTING TOO QUICKLY"
    },
    {
        "id": "47",
        "answer": "NEVER"
    },
    {
        "id": "48",
        "answer": "ENJOY THE EXPERIENCE"
    },
    {
        "id": "49",
        "answer": "BE PATIENT"
    },
    {
        "id": "50",
        "answer": "USE YOUR IMAGINATION"
    },
    {
        "id": "51",
        "answer": "TRY A MORE UNLIKELY SOLUTION"
    },
    {
        "id": "52",
        "answer": "WAIT FOR A BETTER OFFER"
    },
    {
        "id": "53",
        "answer": "UNQUESTIONABLY"
    },
    {
        "id": "54",
        "answer": "KEEP AN OPEN MIND"
    },
    {
        "id": "55",
        "answer": "WAIT"
    },
    {
        "id": "56",
        "answer": "THERE WILL BE OBSTACLES TO OVERCOME"
    },
    {
        "id": "57",
        "answer": "THE OUTCOME WIL BE POSITIVE"
    },
    {
        "id": "58",
        "answer": "DON'T WASTE YOUR TIME"
    },
    {
        "id": "59",
        "answer": "BE DELIGHTFULLY SURE OF IT"
    },
    {
        "id": "60",
        "answer": "THERE IS A SUBSTANTIAL LINK TO ANOTHER SITUATION"
    },
    {
        "id": "61",
        "answer": "MAKE A LIST OF WHY NOT"
    },
    {
        "id": "62",
        "answer": "YOU WILL FIND OUT EVERYTHING YOU'LL NEED TO KNOW"
    },
    {
        "id": "63",
        "answer": "MAYBE"
    },
    {
        "id": "64",
        "answer": "DEAL WITH IT LATER"
    },
    {
        "id": "65",
        "answer": "LAUGH ABOUT IT"
    },
    {
        "id": "66",
        "answer": "LEAVE BEHIND OLD SOLUTIONS"
    },
    {
        "id": "67",
        "answer": "NO MATTER WHAT"
    },
    {
        "id": "68",
        "answer": "REALIZE THAT TOO MANY CHOICES IS A S DIFFICULT AS TOO FEW"
    },
    {
        "id": "69",
        "answer": "ADOPT AN ADVENTUROUS ATTITUDE"
    },
    {
        "id": "70",
        "answer": "PROVIDED YOU SAY \"THANK YOU\""
    },
    {
        "id": "71",
        "answer": "SPEAK UP ABOUT IT"
    },
    {
        "id": "72",
        "answer": "IT IS NOT SIGNIFICANT"
    },
    {
        "id": "73",
        "answer": "INVESTIGATE AND THEN ENJOY IT"
    },
    {
        "id": "74",
        "answer": "IT IS SURE TO MAKE THINGS INTERESTING"
    },
    {
        "id": "75",
        "answer": "DO IT EARLY"
    },
    {
        "id": "76",
        "answer": "FOLLOW THE ADVICE OF EXPERTS"
    },
    {
        "id": "77",
        "answer": "TAKE MORE TIME TO DECIDE"
    },
    {
        "id": "78",
        "answer": "YOU'LL NEED MORE INFORMATION"
    },
    {
        "id": "79",
        "answer": "BE PRACTICAL"
    },
    {
        "id": "80",
        "answer": "WATCH AND SEE WHAT HAPPENS"
    },
    {
        "id": "81",
        "answer": "ASSISTANCE WOULD MAKE YOUR PROGRESS A SUCCESS"
    },
    {
        "id": "82",
        "answer": "IT COULD BE EXTRAORDINARY"
    },
    {
        "id": "83",
        "answer": "YOU DON'T REALLY CARE"
    },
    {
        "id": "84",
        "answer": "AVOID THE FIRST SOLUTION"
    },
    {
        "id": "85",
        "answer": "DON'T BE RIDICULOUS"
    },
    {
        "id": "86",
        "answer": "FOCUS ON YOUR HOME LIFE"
    },
    {
        "id": "87",
        "answer": "THAT'S OUT OF YOUR CONTROL"
    },
    {
        "id": "88",
        "answer": "REMOVE YOUR OWN OBSTACLES"
    },
    {
        "id": "89",
        "answer": "MAKE A LIST OF WHY"
    },
    {
        "id": "90",
        "answer": "IT'S GOOD TIME TO MAKE PLANS"
    },
    {
        "id": "91",
        "answer": "DON'T IGNORE THE OBVIOUS"
    },
    {
        "id": "92",
        "answer": "IT IS SIGNIFICANT"
    },
    {
        "id": "93",
        "answer": "YOUR ACTIONS WILL IMPROVE THINGS"
    },
    {
        "id": "94",
        "answer": "THERE IS NO GUARANTEE"
    },
    {
        "id": "95",
        "answer": "DEFINITELY"
    },
    {
        "id": "96",
        "answer": "IT'LL COST YOU"
    },
    {
        "id": "97",
        "answer": "TO ENSURE THE BEST DECISION, BE CALM"
    },
    {
        "id": "98",
        "answer": "TRUST YOUR ORIGINAL THOUGHT"
    },
    {
        "id": "99",
        "answer": "PERHAPS, WHEN YOU'RE OLDER"
    },
    {
        "id": "100",
        "answer": "SETTLE IT SOON"
    }


];

export default answers;
