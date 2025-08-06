class ImageData {
    public src = ""
    public description = "No description provided"
    public date = ""
    public location = "No location provided"

    constructor(src: string, description: string, date: string, location: string) {
        this.src = src,
        this.description = description
        this.date = date
        this.location = location
    }


}

export default ImageData