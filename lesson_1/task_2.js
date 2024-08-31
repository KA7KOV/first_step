function greating(name){
    switch (name) {
        case 'Вася':
          return 'Привет, Вася, я Сережа'
          break;
        case 'Петя':
            return 'Привет, Петя, мы очень рады тебя видеть'
          break;
        case 'Дебил':
            return 'я буду в кофте черной драгон мани нахуй на правом рукаве у меня сопли нахуй мои я лысы дрыщавый и злой блядь'
          break;
        default:
            return "Фамилия имя отчество ты хуйлуша"
      }
}

console.log(greating("Вася"))
console.log(greating("Петя"))
console.log(greating("Дебил"))
console.log(greating("хуй"))