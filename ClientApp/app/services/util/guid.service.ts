export class GuidService {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
    
    static getStoredGuid() {
        var guid = window.sessionStorage.getItem("guid");
        if (guid == null){
            guid = GuidService.newGuid();
            window.sessionStorage.setItem('guid', guid);
        }
        return guid;
    }
}