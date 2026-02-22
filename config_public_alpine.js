// The root filesystem location
export const diskImageUrl = "wss://disks.webvm.io/alpine_20251007.ext2";

// The root filesystem backend type
export const diskImageType = "cloud";

// Print an introduction message about the technology
export const printIntro = false;

// Is a graphical display needed
export const needsDisplay = true;

// Executable full path (Required)
// Start X directly instead of normal init
export const cmd = "/usr/bin/startx";

// Arguments, as an array (Required)
// Launch Firefox immediately in kiosk mode
export const args = [
	"/usr/bin/firefox",
	"--no-remote",
	"--kiosk",
	"https://example.com"
];

// Optional extra parameters
export const opts = {
	// User id
	uid: 0,
	// Group id
	gid: 0
};
