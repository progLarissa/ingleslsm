import re,sys
exec(open('trans1.py').read()); exec(open('trans2.py').read())
for f in ['trans3.py','trans4.py','trans5.py','trans6.py','trans7.py']: exec(open(f).read())
s=open('it/app.js').read()
s=s.replace('</script>','').rstrip()+'\n'
def cutfunc(s,name,new):
    i=s.index('function '+name+'(')
    # end: next line starting with 'function ' or '/* ' or 'let ' or 'const ' at col 0 after i
    m=re.compile(r'\n(?=(function |/\* |let |const |async function ))').search(s,i+10)
    return s[:i]+new.rstrip()+'\n'+s[m.start():]
for name in ['renderHome','numDrill','risorse']: s=cutfunc(s,name,FUNCS[name])
a=s.index('/* ---------- CONIUGATORE ---------- */'); b=s.index('/* ---------- MONTA A FRASE ---------- */')
s=s[:a]+FUNCS['__VERBS__']+'\n'+s[b:]
bad=0
for lst in [R,R3,R4,R5,R6,R7]:
    for old,new,n in lst:
        c=s.count(old)
        if n==0: continue
        if c!=n: print('COUNT',c,'expected',n,'::',old[:90].replace('\n','|')); bad+=1; continue
        s=s.replace(old,new)
for o,n in HASH: s=s.replace(o,n)
k='\nrender();\ninitSync();'
assert k in s
s=s.replace(k,'\n'+open('exams_app.js').read()+'\n'+open('plan_app.js').read()+'\n'+open('books_app.js').read()+'\n'+open('vocab_app.js').read()+'\n'+open('writing_app.js').read()+'\n'+open('translate_app.js').read()+k)
rs=open('rhythm_app.js').read()
import re as _re
for name in ['tick','streaks','rhythmWidget','updRhythm','homeRhythm']:
    m=_re.search(r'function '+name+r'\(.*?\n(?=(function |/\* |let |const |async function ))', rs, _re.S)
    s=cutfunc(s,name,m.group(0))
for extra in ['todaySess','rhythmText']:
    m=_re.search(r'function '+extra+r'\(.*?\n(?=(function |/\* |let |const |async function ))', rs, _re.S)
    s=s.replace('function rhythmWidget(', m.group(0)+'function rhythmWidget(',1)
open('build/app.js','w').write(s)
print('bad',bad)
