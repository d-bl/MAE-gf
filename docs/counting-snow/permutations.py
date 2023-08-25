import itertools


def flip_bd(s: str):
    return ''.join(map(lambda c: f"{len(s) + 1 - int(c)}", reversed(s)))


def flip_bq(s: str):
    result = [""] * len(s)
    for i in range(len(s)):
        result[int(s[i]) - 1] = f"{i + 1}"
    return ''.join(result)


def filtered_permutations(s):
    full_set = sorted(''.join(p) for p in itertools.permutations(s))
    perm_set = {s}
    for p in full_set:
        if {p, flip_bd(p), flip_bq(p), flip_bd(flip_bq(p))}.isdisjoint(perm_set):
            perm_set.add(p)
    return sorted(perm_set)


def print_perms(s):
    for perm in filtered_permutations(s):
        s = {perm, flip_bd(perm), flip_bq(perm), flip_bd(flip_bq(perm))}
        print(' '.join(sorted(s)))


points = [[[12.124356, 9], [12.124356, 12]],
          [[13.856407, 6], [13.856407, 15]],
          [[16.454483, 4.5], [16.454483, 16.5]],
          [[19.918584, 4.5], [19.918584, 16.5]],
          [[22.516661, 6], [22.516661, 15]],
          [[24.248711, 9], [24.248711, 12]]]
colors = ["#000000", "#0000FF", "#00FF00", "#FF0000"]
nr_of_rows = 25
start_order_of_pairs = '123456'
nr_of_pairs = len(start_order_of_pairs)  # should match nr of lines in points
perms = filtered_permutations(start_order_of_pairs)
for perm_nr in range(len(perms)):
    end_order_of_pairs = perms[perm_nr]
    print(f'<g id="{end_order_of_pairs}">')
    offset_x = int(perm_nr / nr_of_rows) * 24.25
    offset_y = (perm_nr % nr_of_rows) * 21
    txt = end_order_of_pairs + ' '
    if end_order_of_pairs == flip_bd(end_order_of_pairs):
        txt = txt + '*'
    if end_order_of_pairs == flip_bq(end_order_of_pairs):
        txt = txt + '+'
    print(f'<svg:text x="{12 + offset_x}" y="{21 + offset_y}"'
          f' style="font-size:3.52777px;line-height:1.25;font-family:sans-serif;stroke-width:0.264583"'
          f'><svg:tspan>{txt}</svg:tspan></svg:text>')
    for i in range(nr_of_pairs):
        point_start = points[(int(end_order_of_pairs[i]) - 1)][0]
        point_end = points[(int(start_order_of_pairs[i]) - 1)][1]
        start_x = point_start[0] + offset_x
        start_y = point_start[1] + offset_y
        end_x = point_end[0] + offset_x
        end_y = point_end[1] + offset_y
        print(f'<path style="fill:none;stroke:{colors[i % 4]};stroke-width:0.3px"'
              f' id="{end_order_of_pairs}_{end_order_of_pairs[i]}"'
              f' d="M {start_x},{start_y} {end_x},{end_y}" />')
    print('</g>')


print_perms("123456")
print("--------")
print_perms("12345")
print("--------")
print_perms("1234")
