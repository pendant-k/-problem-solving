-- 코드를 작성해주세요
select count(*) as FISH_COUNT, FN.FISH_NAME
from FISH_INFO FI join FISH_NAME_INFO FN
on FI.FISH_TYPE = FN.FISH_TYPE
group by FN.FISH_NAME
order by FISH_COUNT DESC