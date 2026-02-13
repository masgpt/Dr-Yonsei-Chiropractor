from pathlib import Path
lines = Path('app/locales/ko/translation.json').read_text('utf-8').splitlines()
inside_hero = False
for i,line in enumerate(lines,1):
    stripped = line.strip()
    if stripped.startswith(' hero') and '{' in stripped:
        inside_hero = True
        continue
    if inside_hero:
        if stripped.startswith('trustStrip'):
            break
        if stripped.startswith('title'):
            print(i, stripped)
        if stripped.startswith('titlePart1'):
            print(i, stripped)
        if stripped.startswith('titlePart2'):
            print(i, stripped)
