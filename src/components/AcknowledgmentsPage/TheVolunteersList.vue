<template>
  <section class="thanks">
    <header>
      <h1 class="title">SAGA志愿者致谢名单</h1>
      <p class="description">
        SAGA在这里由衷地向每一位做出贡献的志愿者表示最真挚的感谢，感谢你们的每一份付出。
      </p>
    </header>
    <div class="header-divider"></div>
    <div class="section-container">
      <div class="volunteers-container">
        <div class="filter-by-dept">
          <!-- filter by department name -->
          <button class="filter-btn" :class="{ 'active': activeDept === 'all' }" @click="showDeptMembers('all')">
            完整名单
          </button>
          <button v-for="dept in departments" :key="dept.name" class="filter-btn"
            :class="{ 'active': activeDept === dept.name }" :data-filter="dept.name" @click="showDeptMembers(dept.name)">
            {{ dept.name }}
          </button>
          <div class="section-divider"></div>
        </div>
        <div class="volunteer-list">
          <div v-for="dept in filteredMembers.depts" :key="dept.name" class="dept-name" :data-category="dept.name"
            v-show="activeDept === dept.name || activeDept === 'all'">
            <p class="member-names">
              <span v-for="member in dept.members" :key="member.id" class="member-name">{{ member.name }}</span>
            </p>
          </div>
        </div>
      </div>

      <div class="bottom-divider"></div>

      <aside class="past-thanks">
        <div>往期志愿者致谢</div>
        <a href="#">&#8226;五期志愿者致谢</a><br />
        <a href="#">&#8226;四期志愿者致谢</a><br />
        <a href="#">&#8226;三期志愿者致谢</a><br />
        <a href="#">&#8226;二期志愿者致谢</a><br />
        <a href="#">&#8226;一期志愿者致谢</a><br />
      </aside>
    </div>
  </section>
</template>

<script>
import members from '@/assets/dataset/volunteers_fifth.json';

export default {
  data() {
    return {
      members: members,
      activeDept: 'all',
    };
  },
  computed: {
    departments() {
      return [
        { name: '主席团' },
        { name: '核心团队' },
        { name: '教学部' },
        { name: '行研部' },
        { name: '宣传部' },
        { name: '人事部' },
        { name: '财务部' },
        { name: '法务部' },
        { name: '外联部' },
        { name: 'IT部' },
      ];
    },
    filteredMembers() {
      let allMembers = [];
      if (this.activeDept === 'all') {
        this.members.depts.forEach((dept) => {
          allMembers.push(...dept.members);
        });
        return {
          depts: [
            {
              name: '全体志愿者',
              members: allMembers,
            },
          ],
        };
      } else {
        const selectedDept = this.members.depts.find((dept) => dept.name === this.activeDept);
        return {
          depts: [selectedDept],
        };
      }
    },
  },
  methods: {
    showDeptMembers(deptName) {
      this.activeDept = deptName;
    },
  },
};
</script>

<style scoped>
.thanks {
  margin-bottom: 5rem;
}

.header {
  text-align: center;
}

.header-divider {
  border-bottom: 0.07rem solid;
  border-color: var(--clr-text);
  margin-bottom: 1rem;
}

.title {
  font-size: var(--fs-700);
  font-weight: 600;
  text-align: center;
  margin-block: 3rem 1rem;
  font-family: var(--ff-accent);
}

.description {
  padding-inline: var(--page-padding-inline);
  font-size: var(--fs-400);
}

.filter-by-dept {
  display: flex;
}

.filter-btn {
  cursor: pointer;
  text-transform: uppercase;
  background: transparent;
  border: 0;
  border-radius: 0.25rem;
  padding: 0.25rem 1rem;
  font-size: 1.2rem;
  position: relative;
  display: block;
  text-transform: uppercase;
  background: transparent;
  border: 0;
  border-radius: 0.25rem;
  padding: 0.4rem 0.4rem;
  margin-bottom: 1rem;
  font-weight: bold;
  transition: 0.5s;
}

.filter-btn {
  color: var(--clr-text);
}

.filter-btn:hover {
  background-color: var(--clr-background-muted);
  color: var(--clr-button);
}

/* 选中状态 */
.filter-btn.active {
  background: var(--clr-primary);
  color: var(--clr-back);
  box-shadow: 0 0 0.5rem var(--clr-button);
}

.filter-btn.active:before {
  transform: scaleY(1);
  opacity: 1;
}

.filter-btn.active:after {
  transform: scale(1);
}

.filter-btn:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top: 0.09rem solid var(--clr-primary);
  border-bottom: 0.09rem solid var(--clr-primary);
  transform: scaleY(2);
  opacity: 0;
  transition: 0.5s;
  z-index: -1;
}

.filter-btn:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--clr-primary);
  color: var(--clr-background);
  transform: scale(0);
  transition: 0.5s;
  z-index: -1;
}
.dept-name {
  line-height: 2rem;
}

.member-names {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.filters {
  --flow-spacing: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
}

.section-container {
  display: flex;
}

.volunteer-list {
  display: inline;
  white-space: nowrap;
}

.volunteers-container {
  flex-basis: 70%;
  margin-right: 4rem;
  margin-left: 9rem;
}

.past-thanks {
  border-width: 0.03rem;
  border-color: var(--clr-text);
  border-style: solid;
  border-radius: 0.8rem;
  flex-basis: 30%;
  margin-right: 9rem;
}

.past-thanks div {
  margin-left: 1rem;
  margin-top: 0.7rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.past-thanks a {
  margin-left: 1rem;
  font-size: 1rem;
  line-height: 2.2rem;
  margin-bottom: 1.2rem;
  text-decoration: underline;
  cursor: pointer;
}

@media (max-width: 768px) {
  .section-container {
    flex-direction: column;
  }

  .bottom-divider {
    border-bottom: 0.07rem solid;
    border-color: var(--clr-text);
    margin-bottom: 2rem;
  }

  .past-thanks {
    border-width: 0;
  }
}
</style>
