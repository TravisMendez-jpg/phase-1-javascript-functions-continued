function saturdayFun(activity = "roller-skate"){

return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog");

function mondayWork (work = "go to the office") {

    return `This Monday, I will ${work}.`;
}
mondayWork("work from home.");

function wrapAdjective (flair = "*"){
    const innerFunction = function (adj = 'special'){
        return `You are ${flair}${adj}${flair}!`
    }
    return innerFunction
}

wrapAdjective('|')('radical');