// todo: remove?

export function removeStringIndentation(str: string, opts: { isInStringAtPos: (pos: number) => boolean; indentWidthInSpaces: number; }) {
    const { isInStringAtPos, indentWidthInSpaces } = opts;
    const startPositions: number[] = [];
    const endPositions: number[] = [];
    let minIndentWidth: number | undefined;

    analyze();
    return buildString();

    function analyze() {
        let isAtStartOfLine = str[0] === " " || str[0] === "\t";

        for (let i = 0; i < str.length; i++) {
            if (!isAtStartOfLine) {
                if (str[i] === "\n" && !isInStringAtPos(i + 1))
                    isAtStartOfLine = true;
                continue;
            }

            startPositions.push(i);

            let spacesCount = 0;
            let tabsCount = 0;

            while (true) {
                if (str[i] === " ")
                    spacesCount++;
                else if (str[i] === "\t")
                    tabsCount++;
                else
                    break;

                i++;
            }

            // indentation for spaces rounds up to the nearest tab size multiple
            const indentWidth = Math.ceil(spacesCount / indentWidthInSpaces) * indentWidthInSpaces + tabsCount * indentWidthInSpaces;
            if (minIndentWidth == null || indentWidth < minIndentWidth)
                minIndentWidth = indentWidth;

            endPositions.push(i);
            isAtStartOfLine = false;
        }
    }

    function buildString() {
        if (startPositions.length === 0)
            return str;
        if (minIndentWidth == null || minIndentWidth === 0)
            return str;

        const deindentWidth = minIndentWidth;
        let result = "";
        result += str.substring(0, startPositions[0]);
        let lastEndPos = startPositions[0];

        for (let i = 0; i < startPositions.length; i++) {
            const startPosition = startPositions[i];
            const endPosition = endPositions[i];
            let indentCount = 0;
            let pos: number;
            for (pos = startPosition; pos < endPosition; pos++) {
                if (indentCount >= deindentWidth)
                    break;
                if (str[pos] === " ")
                    indentCount++;
                else if (str[pos] === "\t")
                    indentCount += indentWidthInSpaces;
            }

            lastEndPos = startPositions[i + 1] == null ? str.length : startPositions[i + 1];
            result += str.substring(pos, lastEndPos);
        }

        result += str.substring(lastEndPos);

        return result;
    }
}