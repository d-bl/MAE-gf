import itertools


def flip_bd(s: str):
    return ''.join(map(lambda c: f"{len(s) + 1 - int(c)}", reversed(s)))


def flip_bp(s: str):
    result = [""] * len(s)
    for i in range(len(s)):
        result[int(s[i]) - 1] = f"{i + 1}"
    return ''.join(result)


def filtered_permutations(s):
    full_set = sorted(''.join(p) for p in itertools.permutations(s))
    perm_set = {s}
    for p in full_set:
        if {p, flip_bd(p), flip_bp(p), flip_bd(flip_bp(p))}.isdisjoint(perm_set):
            perm_set.add(p)
    return sorted(perm_set)


def filtered_bp_only(s):
    full_set = sorted(''.join(p) for p in itertools.permutations(s))
    perm_set = {s}
    for p in full_set:
        if {p, flip_bp(p)}.isdisjoint(perm_set):
            perm_set.add(p)
    return sorted(perm_set)


def filtered_4():
    full_set = filtered_permutations('123456')
    perm_set = {'123456'}
    for p in full_set:
        if p.startswith('1') and p.endswith('6'):
            perm_set.add(p)
    return sorted(perm_set)


def print_perms(s):
    for perm in filtered_permutations(s):
        s = {perm, flip_bd(perm), flip_bp(perm), flip_bd(flip_bp(perm))}
        print(' '.join(sorted(s)))


def draw_perms(nr_of_rows, start_order_of_pairs, perms, points):
    colors = ["#0000FF", "#00FF00", "#FF0000", "#000000", "#9955FF", "#EEEE00"]
    nr_of_pairs = len(start_order_of_pairs)  # should match nr of lines in points
    for perm_nr in range(len(perms)):
        end_order_of_pairs = perms[perm_nr]
        offset_x = int(perm_nr / nr_of_rows) * 24.25
        offset_y = (perm_nr % nr_of_rows) * 21
        txt = end_order_of_pairs + ' '
        id_bd = end_order_of_pairs == flip_bd(end_order_of_pairs)
        is_bp = end_order_of_pairs == flip_bp(end_order_of_pairs)
        if id_bd and is_bp:
            txt = txt + 'bdpq'
        elif id_bd:
            txt = txt + 'bd'
        elif is_bp:
            txt = txt + 'bp'
        print(f'<g id="{end_order_of_pairs}">')
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
            print(f'<path style="fill:none;stroke:{colors[i % 6]};stroke-width:0.8px"'
                  f' id="{end_order_of_pairs}_{end_order_of_pairs[i]}"'
                  f' d="M {start_x},{start_y} {end_x},{end_y}" />')
        print('</g>')
pointsFor3 = [
          [[13.856407, 6], [13.856407, 15]],
          [[18.1865335, 4.5], [18.1865335, 16.5]],
          [[22.516661, 6], [22.516661, 15]],]
pointsFor5 = [[[12, 4], [12, 16]],
          [[15, 4], [15, 16]],
          [[18, 4], [18, 16]],
          [[21, 4], [21, 16]],
          [[24, 4], [24, 16]]]
pointsFor6 = [[[12.124356, 9], [12.124356, 12]],
          [[13.856407, 6], [13.856407, 15]],
          [[16.454483, 4.5], [16.454483, 16.5]],
          [[19.918584, 4.5], [19.918584, 16.5]],
          [[22.516661, 6], [22.516661, 15]],
          [[24.248711, 9], [24.248711, 12]]]


# draw_perms(1, '123', sorted(''.join(p) for p in itertools.permutations('123')), pointsFor3)
# draw_perms(1, '123456', filtered_4(), pointsFor6)
# draw_perms(5, '12345', filtered_bp_only('12345'), pointsFor6)
# draw_perms(5,'12345',filtered_bp_only('12345'), pointsFor6)
# draw_perms(15,'123456', filtered_permutations('123456'), pointsFor6)
# draw_perms(5,'12345', filtered_permutations('12345'), pointsFor5)

print (len(filtered_permutations('1234567')))
print (len(filtered_permutations('12345678')))
print (len(filtered_permutations('123456789')))
# print_perms("123456")
# print_perms("12345")
# print_perms("1234")
