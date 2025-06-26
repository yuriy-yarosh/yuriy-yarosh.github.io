export const getTitleFor = (pathname: string) =>
	[
		["/about", "Yuriy Yarosh | About"],
		["/contacts", "Yuriy Yarosh | Contacts"],
		["/legal", "Yuriy Yarosh | Legal"],
		["/blog", "Yuriy Yarosh | Blog"],
		["/projects", "Yuriy Yarosh | Projects"],
		["/events", "Yuriy Yarosh | Events"],
		["/hire", "Yuriy Yarosh | For Hire"],
	].find(([p]) => pathname.startsWith(p))?.[1] ||
	"Yuriy Yarosh | Personal Site";

export default getTitleFor;
