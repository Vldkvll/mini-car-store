export const fixTitleText = (string) => {
    let res = string
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .map((word) => word[0].toUpperCase() + word.substring(1))
        .join(" ");
    return res;
};
