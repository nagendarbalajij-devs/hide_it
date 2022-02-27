export function SaveMessageModel() {
	this.content = "";
	this.message = "";
	this.fMessage = "";
	this.fine = 0;
	this.isPrivate = true;
}

export function MessageContentModel() {
	this.message = "";
	this.fine = 0;
	this.isPrivate = true;
	this.owner = "";
	this.messageId = "";
}
