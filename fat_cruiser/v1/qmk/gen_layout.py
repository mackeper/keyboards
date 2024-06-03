def main() -> None:
    rows = [10, 10, 10, 6]

    for row in range(len(rows)):
        for col in range(rows[row]):
            mid = rows[row] // 2
            side = "L" if col < mid else "R"
            col_label = col if col < mid else rows[row] - col - 1
            x = max(rows) // 2 - mid + col
            print(
                f'{{ "label": "{side}{row}{col_label}", "matrix": [{row}, {x}], "x": {x}, "y": {row} }}, '
            )


if __name__ == "__main__":
    main()
