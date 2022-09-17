// 18:00 -> ["18", "00"] -> [18, 00]
export function convertHourStringToMinute(hourString: string) {
    const [hours, minutes] = hourString.split(':').map(Number);

    return (hours * 60) + minutes;
}