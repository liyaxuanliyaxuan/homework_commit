// const defaultState = {
//     inputValue: 'hahahaha',
//     list: [
//         'l',
//         "o",
//         "v",
//         "e"
//     ],
//     ifLogin: false,
//     name: "",
//     currentTeacher:'',
//     email: "",
//     passwrd: "",
//     subjectList: ['高数', '线代', '大物', '英语', '概率论', '复变函数', '单片机',],
//     teacherList: [{ name: '赵楚楚', college: '通信', class: ['01011801', '01011802'] }, { name: '顾明', college: '计算机', class: ['01011801', '01011802'] }, { name: '赵楚', college: '通信', class: ['01011801', '01011802'] }, { name: '顾明', college: '计算机', class: ['01011801', '01011802'] },],

// }  //默认数据

// export default (state = defaultState, action) => {  //就是一个方法函数
//     if (action.type === 'changeInput') {
//         let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
//         switch (action.detail) {
//             case "name": newState.name = action.value
//                 break;
//             case "email": newState.email = action.value
//                 break;
//             case "password": newState.passwrd = action.value

//         }

//         return newState
//     }
//     if (action.type === 'registerSubmit') { //根据type值，编写业务逻辑
//         let newState = JSON.parse(JSON.stringify(state))
//         newState.list.push(newState.inputValue)  //push新的内容到列表中去
//         newState.inputValue = ''
//         return newState
//     }
//     if (action.type === 'loginSubmit'){
//         let newState = JSON.parse(JSON.stringify(state))
//         newState.ifLogin = action.value
//         return newState
//     }
//     if(action.type === 'searchTeacher'){
//         let newState = JSON.parse(JSON.stringify(state))
//         newState.currentTeacher = action.name
//         return newState
//     }


//     return state
// }


const defaultStateTwo = {
    currentTeacherItem:{},
    userName:'小奇',
    studentID:'1234567890',
    password:'123456',
    email:'123456789@qq.com',
    ifLogin:'true',
    subjectList:[
        {subjectNumber:'S01',classNumber:'C01',subjectName:'高等数学（上）'},
        {subjectNumber:'S02',classNumber:'C01',subjectName:'高等数学（下）'},
        {subjectNumber:'S03',classNumber:'C01',subjectName:'线性代数'},
        {subjectNumber:'S04',classNumber:'C01',subjectName:'大学物理（上）'},
        {subjectNumber:'S05',classNumber:'C01',subjectName:'大学物理（下）'},
        {subjectNumber:'S06',classNumber:'C01',subjectName:'信号与系统'},
        {subjectNumber:'S07',classNumber:'C01',subjectName:'电路实验'},
        {subjectNumber:'S08',classNumber:'C01',subjectName:'数字媒体技术导论'},
        {subjectNumber:'S09',classNumber:'C01',subjectName:'离散数学'},
        {subjectNumber:'S10',classNumber:'C01',subjectName:'概率论'},
        {subjectNumber:'S11',classNumber:'C01',subjectName:'数字与信号'},
        {subjectNumber:'S12',classNumber:'C01',subjectName:'C语言'},
        {subjectNumber:'S13',classNumber:'C01',subjectName:'大学英语2'},
        {subjectNumber:'S14',classNumber:'C01',subjectName:'大学英语3'}
    ],
    teacherList:[
        {tearcherNumber:'T01',subjectNumber:'S01',classNumber:'C01',subjectName:'高等数学（上）'},
        {tearcherNumber:'T02',subjectNumber:'S02',classNumber:'C01',subjectName:'高等数学（下）'},
        {tearcherNumber:'T03',subjectNumber:'S03',classNumber:'C01',subjectName:'线性代数'},
        {tearcherNumber:'T04',subjectNumber:'S04',classNumber:'C01',subjectName:'大学物理（上）'},
        {tearcherNumber:'T05',subjectNumber:'S05',classNumber:'C01',subjectName:'大学物理（下）'},
        {tearcherNumber:'T06',subjectNumber:'S06',classNumber:'C01',subjectName:'信号与系统'},
        {tearcherNumber:'T07',subjectNumber:'S07',classNumber:'C01',subjectName:'电路实验'},
        {tearcherNumber:'T08',subjectNumber:'S08',classNumber:'C01',subjectName:'数字媒体技术导论'},
        {tearcherNumber:'T09',subjectNumber:'S09',classNumber:'C01',subjectName:'离散数学'},
        {tearcherNumber:'T10',subjectNumber:'S10',classNumber:'C01',subjectName:'概率论'},
        {tearcherNumber:'T11',subjectNumber:'S11',classNumber:'C01',subjectName:'数字与信号'},
        {tearcherNumber:'T12',subjectNumber:'S12',classNumber:'C01',subjectName:'C语言'},
        {tearcherNumber:'T13',subjectNumber:'S13',classNumber:'C01',subjectName:'大学英语2'},
        {tearcherNumber:'T14',subjectNumber:'S14',classNumber:'C01',subjectName:'大学英语3'}
    ]
}

export default (state = defaultStateTwo ,action) =>{
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        
        case 'changeTeacherItem':{
            return newState

        }
        default: return state

    }
}
