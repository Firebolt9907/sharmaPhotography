class ImageData {
    public jpgSrc = ""
    public webpSrc = ""
    public description = "No description provided"
    public date = ""
    public location = "No location provided"
    public type = ""

    constructor(jpgSrc: string, webpSrc: string, description: string, date: string, location: string, type: string) {
        this.jpgSrc = jpgSrc,
            this.webpSrc = webpSrc,
            this.description = description
        this.date = date
        this.location = location
        this.type = type
    }


}

export default ImageData