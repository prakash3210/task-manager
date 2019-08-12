class Task {
    constructor(id, title, desc = ''){
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.completed = false;
        this.date = new Date();
    }
}

export default Task;